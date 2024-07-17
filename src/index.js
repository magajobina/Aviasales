/* eslint-disable no-unused-vars */
/* eslint-disable default-param-last */
import ReactDOM from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
// import { logger } from './middleware/logger'
import mainReducer from './appSlice/mainSlice'
import App from './components/App'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))

// const store = configureStore({
//   reducer, // пока у меня один redu
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
// })
const store = configureStore({
  reducer: {
    main: mainReducer,
  },
})

root.render(
  // Провайдер обновит наше приложение при изменении store. Если
  // подробнее, то после того как один из дочерних компонентов вызовет
  // dispatch то тогда провайдер об этом узнает и обновит оставшуюся часть приложения
  <Provider store={store}>
    <App />
  </Provider>
)
