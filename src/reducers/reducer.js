/* eslint-disable default-param-last */
// eslint-disable-next-line import/prefer-default-export
export const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1

    case 'DEC':
      return state - 1

    case 'RND':
      return state + action.payload

    default:
      return state
  }
}