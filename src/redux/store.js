import { configureStore } from '@reduxjs/toolkit'
import userReducer from '@/redux/userSlice'
import productsReducer from '@/redux/productsSlice'
import farmersSlice from '@/redux/farmersSlice'
import eventsSlice from '@/redux/eventsSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
    farmers: farmersSlice,
    events: eventsSlice
  },
  devTools: true
})
