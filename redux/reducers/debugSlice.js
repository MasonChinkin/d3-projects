import { createSlice } from '@reduxjs/toolkit'
import { isClient } from '../../config/AppConfig'

const debugSlice = createSlice({
  name: 'debug',
  initialState: {
    isClient,
  },
  reducers: {
    noOp: () => {},
  },
})

export default debugSlice
