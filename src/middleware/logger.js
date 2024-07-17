/* eslint-disable import/prefer-default-export */

export const logger = (storeAPI) => (next) => (action) => {
  console.log('dispatching', action)
  const result = next(action)
  console.log('next state', storeAPI.getState())
  return result
}