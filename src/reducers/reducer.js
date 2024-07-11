/* eslint-disable no-else-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */
/* eslint-disable default-param-last */

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
// eslint-disable-next-line import/prefer-default-export
export function reducer(state = initialState, action) {
  const { checkboxes } = state

  switch (action.type) {
    case 'TOGGLE_CHECKBOX':
      // Если чекбокс all был выбран
      if (action.name === 'all') {
        const newCheckboxes = checkboxes.map((checkbox) => ({
          ...checkbox,
          checked: action.checked,
        }))

        return { ...state, checkboxes: newCheckboxes }
      }
      // Обновляем конкретный чекбокс
      const newCheckboxes = checkboxes.map((checkbox) =>
        checkbox.name === action.name ? { ...checkbox, checked: action.checked } : checkbox
      )

      // Определяем, все ли чекбоксы помимо all выбраны
      const allChecked = newCheckboxes.every((checkbox) => checkbox.name === 'all' || checkbox.checked)

      const finalCheckboxes = newCheckboxes.map((checkbox) =>
        checkbox.name === 'all' ? { ...checkbox, checked: allChecked } : checkbox
      )

      return { ...state, checkboxes: finalCheckboxes }

    default:
      return state
  }
}
