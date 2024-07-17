/* eslint-disable no-unused-vars */
/* eslint-disable default-param-last */
import ReactDOM from 'react-dom/client'
import { configureStore, asyncThunkCreator } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { reducer } from './reducers/reducer'
import { logger } from './middleware/logger'
import App from './components/App'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

root.render(
  // Провайдер обновит наше приложение при изменении store. Если
  // подробнее, то после того как один из дочерних компонентов вызовет
  // dispatch то тогда провайдер об этом узнает и обновит оставшуюся часть приложения
  <Provider store={store}>
    <App />
  </Provider>
)
