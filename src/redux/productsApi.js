import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'products',
    }),
  }),
})

export const { useGetProductsQuery } = productsApi
