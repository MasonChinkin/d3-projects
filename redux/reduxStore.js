import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import currentVizDataSlice from './reducers/currentVizDataSlice'

const reducer = {
  currentVizData: currentVizDataSlice.reducer,
}

const logger = createLogger({ collapsed: true }) // console logs are initially collapsed
const middleware = [...getDefaultMiddleware(), logger]

const createStore = () =>
  configureStore({
    reducer,
    middleware,
  })

export default createStore
