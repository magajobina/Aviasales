/* eslint-disable no-param-reassign */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  checkboxes: [
    { name: 'all', checked: true },
    { name: 'without_transfers', checked: true },
    { name: 'one_transfer', checked: true },
    { name: 'two_transfers', checked: true },
    { name: 'three_transfers', checked: true },
  ],
  tickets: [],
  filterType: 'cheapest',
  howMuchTickets: 5,
  status: null,
  error: null,
  searchId: null,
}

// Создаем thunk для получения searchId
export const fetchSearchId = createAsyncThunk('main/fetchSearchId', async () => {
  const baseUrl = 'https://aviasales-test-api.kata.academy'
  const searchIdUrl = '/search'

  const responseID = await fetch(`${baseUrl}${searchIdUrl}`)
  const data = await responseID.json()
  return data.searchId
})

// Создаем thunk для получения пачки билетов
export const fetchTicketsBatch = createAsyncThunk('main/fetchTicketsBatch', async (searchId) => {
  const baseUrl = 'https://aviasales-test-api.kata.academy'
  const ticketsUrl = '/tickets'

  const responseTickets = await fetch(`${baseUrl}${ticketsUrl}?searchId=${searchId}`)
  if (!responseTickets.ok) {
    throw new Error(`Error ${responseTickets.status}: ${responseTickets.statusText}`)
  }
  const ticketsList = await responseTickets.json()
  return ticketsList
})

// Создаем thunk для циклического получения билетов
export const fetchTickets = createAsyncThunk('main/fetchTickets', async (_, { dispatch }) => {
  // console.dir(dispatch);
  const searchId = await dispatch(fetchSearchId()).unwrap()

  let stop = false

  while (!stop) {
    try {
      // eslint-disable-next-line no-await-in-loop
      const ticketsList = await dispatch(fetchTicketsBatch(searchId)).unwrap()
      // eslint-disable-next-line no-use-before-define
      dispatch(addTickets(ticketsList.tickets))
      stop = ticketsList.stop
    } catch (error) {
      // console.error('Error fetching tickets:', error)
    }
  }

  return searchId
})

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    toggledCheckbox(state, action) {
      const { payload } = action

      if (payload.name === 'all') {
        state.checkboxes.forEach((checkbox) => {
          checkbox.checked = payload.checked
        })
        return
      }

      state.checkboxes.forEach((checkbox) => {
        if (checkbox.name === payload.name) checkbox.checked = !checkbox.checked
      })

      const areAllChecked = state.checkboxes.every((checkbox) => checkbox.name === 'all' || checkbox.checked)

      state.checkboxes.forEach((checkbox) => {
        if (checkbox.name === 'all') checkbox.checked = areAllChecked
      })
    },
    switchFilter(state, action) {
      const { payload } = action

      state.filterType = payload
    },
    showMore(state) {
      state.howMuchTickets += 5
    },
    addTickets(state, action) {
      state.tickets = [...state.tickets, ...action.payload]
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchId.fulfilled, (state, action) => {
        state.searchId = action.payload
      })
      .addCase(fetchSearchId.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.error.message
      })
      .addCase(fetchTickets.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchTickets.fulfilled, (state) => {
        state.status = 'resolved'
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.error.message
      })
  },
})

// Создаем селектор для фильтрованных билетов
export const selectFilteredTickets = (state) => {
  let result = []
  const { tickets } = state.main
  let filteredByCheckboxes = tickets
  const { checkboxes } = state.main
  const { filterType } = state.main

  // ФИЛЬТРУЕМ ЧЕКБОКСЫ
  // Если 'all' не активен, фильтруем по количеству пересадок
  if (!checkboxes.find((checkbox) => checkbox.name === 'all').checked) {
    const conditions = []
    if (checkboxes.find((checkbox) => checkbox.name === 'three_transfers').checked) {
      conditions.push(3)
    }
    if (checkboxes.find((checkbox) => checkbox.name === 'two_transfers').checked) {
      conditions.push(2)
    }
    if (checkboxes.find((checkbox) => checkbox.name === 'one_transfer').checked) {
      conditions.push(1)
    }
    if (checkboxes.find((checkbox) => checkbox.name === 'without_transfers').checked) {
      conditions.push(0)
    }

    filteredByCheckboxes = tickets.filter((ticket) =>
      ticket.segments.some((segment) => conditions.includes(segment.stops.length))
    )
  }

  // ФИЛЬТРУЕМ СОГЛАСНО ВЕРХНИМ ФИЛЬТРАМ
  if (filterType === 'cheapest') {
    result = filteredByCheckboxes.slice().sort((a, b) => a.price - b.price)
  } else if (filterType === 'fastest') {
    result = filteredByCheckboxes
      .slice()
      .sort(
        (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
      )
  } else if (filterType === 'optimal') {
    // Логика фильтрации оптимальных билетов
    // (т.к. по этому пункту не было ТЗ то его написание я полностью поручил чату GPT)
    // ПОЛНОСТЮ НАПИСАНО ЧАТОМ GPT!!!!!!!!!!!!!
    const maxPrice = Math.max(...filteredByCheckboxes.map((ticket) => ticket.price))
    const maxDuration = Math.max(
      ...filteredByCheckboxes.map((ticket) => ticket.segments[0].duration + ticket.segments[1].duration)
    )
    const maxStops = Math.max(
      ...filteredByCheckboxes.map((ticket) =>
        Math.max(ticket.segments[0].stops.length, ticket.segments[1].stops.length)
      )
    )

    const weights = {
      price: 0.5,
      duration: 0.3,
      stops: 0.2,
    }

    const getOptimalScore = (ticket) => {
      const normPrice = ticket.price / maxPrice
      const normDuration = (ticket.segments[0].duration + ticket.segments[1].duration) / maxDuration
      const normStops = Math.max(ticket.segments[0].stops.length, ticket.segments[1].stops.length) / maxStops

      return weights.price * normPrice + weights.duration * normDuration + weights.stops * normStops
    }

    result = filteredByCheckboxes.slice().sort((a, b) => getOptimalScore(a) - getOptimalScore(b))
  }
  // console.log(result)

  return result
}

export const { toggledCheckbox, switchFilter, addTickets, showMore } = mainSlice.actions
export default mainSlice.reducer
