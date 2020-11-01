import { createSlice } from '@reduxjs/toolkit'

const currentVizDataSlice = createSlice({
  name: 'currentVizData',
  initialState: {},
  reducers: {
    noOp: () => {},
  },
})

export default currentVizDataSlice
