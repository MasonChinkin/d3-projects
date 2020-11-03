import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import currentVizDataSlice from './reducers/currentVizDataSlice'
import debugSlice from './reducers/debugSlice'

const reducer = {
  currentVizData: currentVizDataSlice.reducer,
  debug: debugSlice.reducer,
}

const logger = createLogger({ collapsed: true }) // console logs are initially collapsed
const middleware = [...getDefaultMiddleware(), logger]

const createStore = () =>
  configureStore({
    reducer,
    middleware,
  })

export default createStore
