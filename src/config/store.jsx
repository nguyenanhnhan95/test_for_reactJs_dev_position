import { configureStore } from '@reduxjs/toolkit'
import { pointSlice } from '../redux/slice/pointSlice'

export const store = configureStore({
  reducer: {
    point:pointSlice.reducer
  },
})