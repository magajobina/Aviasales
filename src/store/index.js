import { configureStore } from '@reduxjs/toolkit'
import mainReducer from '../appSlices/mainSlice'

const store = configureStore({
  reducer: {
    main: mainReducer,
  },
})

export default store