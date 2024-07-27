/* eslint-disable no-use-before-define */
/* eslint-disable no-continue */
/* eslint-disable no-await-in-loop */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  checkboxes: [
    { name: 'all', checked: false },
    { name: 'without_transfers', checked: false },
    { name: 'one_transfer', checked: false },
    { name: 'two_transfers', checked: false },
    { name: 'three_transfers', checked: false },
  ],
  tickets: [],
  stop: null,
  status: null,
  error: null,
  searchId: null,
}

// Создаем thunk для получения searchId
export const fetchSearchId = createAsyncThunk('main/fetchSearchId', async () => {
  const baseUrl = 'https://aviasales-test-api.kata.academy'
  const searchIdUrl = '/search'

  const responseID = await fetch(baseUrl + searchIdUrl)
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
export const fetchTickets = createAsyncThunk('main/fetchTickets', async (_, { dispatch, getState }) => {
  const searchId = await dispatch(fetchSearchId()).unwrap()

  let stop = false

  while (!stop) {
    try {
      const ticketsList = await dispatch(fetchTicketsBatch(searchId)).unwrap()
      dispatch(addTickets(ticketsList.tickets))
      stop = ticketsList.stop
    } catch (error) {
      console.error('Error fetching tickets:', error)
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
    addTickets(state, action) {
      state.tickets = [...state.tickets, ...action.payload]
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchId.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchSearchId.fulfilled, (state, action) => {
        state.searchId = action.payload
        state.status = 'resolved'
      })
      .addCase(fetchSearchId.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.error.message
      })
      .addCase(fetchTickets.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.status = 'resolved'
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.error.message
      })
  },
})

export const { toggledCheckbox, addTickets } = mainSlice.actions
export default mainSlice.reducer
