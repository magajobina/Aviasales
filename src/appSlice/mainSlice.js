/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  checkboxes: [
    {
      name: 'all',
      checked: false,
    },
    {
      name: 'without_transfers',
      checked: false,
    },
    {
      name: 'one_transfer',
      checked: false,
    },
    {
      name: 'two_transfers',
      checked: false,
    },
    {
      name: 'three_transfers',
      checked: false,
    },
  ],
}

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    toggledCheckbox(state, action) {
      const { payload } = action

      // Если чекбокс All был выбран то втыкаем return т.к. дальше делать нечего
      if (payload.name === 'all') {
        state.checkboxes.forEach((checkbox) => {
          checkbox.checked = payload.checked
        })
        return
      }

      // выбираем конкретный чекбокс и меняем его на противоположный
      state.checkboxes.forEach((checkbox) => {
        if (checkbox.name === payload.name) checkbox.checked = !checkbox.checked
      })

      // Если все кроме All нажаты то будет true, а иначе false
      const areAllChecked = state.checkboxes.every((checkbox) => checkbox.name === 'all' || checkbox.checked)

      // устанавливаем состояние чекбокса All в соответствие с areAllChecked
      state.checkboxes.forEach((checkbox) => {
        if (checkbox.name === 'all') checkbox.checked = areAllChecked
      })
    },
  },
})

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { toggledCheckbox } = mainSlice.actions

// Export the slice reducer as the default export
export default mainSlice.reducer
