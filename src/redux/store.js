import { configureStore } from '@reduxjs/toolkit'
import userReducer from '@/redux/userSlice'
import farmersSlice from '@/redux/farmersSlice'
import eventsSlice from '@/redux/eventsSlice'
import { productsApi } from './productsApi'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

export const store = configureStore({
  reducer: {
    user: userReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    farmers: farmersSlice,
    events: eventsSlice,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([productsApi.middleware]),
})

setupListeners(store.dispatch)
