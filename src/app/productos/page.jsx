'use client'

import { useAppDispatch } from '@/redux/hooks'
import { useGetProductsQuery } from '@/redux/productsApi'

export default function Products() {
  const dispatch = useAppDispatch()
  const { isLoading, isFetching, data, error } = useGetProductsQuery(null)
  console.log(data)

  if (isLoading || isFetching) return <p>loading...</p>
  if (error) return <p>some error</p>
  return <div>Products</div>
}
