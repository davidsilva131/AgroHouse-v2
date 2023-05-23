import { getSupaProducts } from '@/services/supaProducts'
import { createSlice } from '@reduxjs/toolkit'
import { supabase } from "@/services/supabaseConfig";
import { useDispatch } from 'react-redux';
import { useAppDispatch } from '@/hooks/hooks';

export const getProductsAsync = async () => {
  const res = await fetch('/api/products')
  const data= await res.json()
  useAppDispatch(getProducts(data))
}

let initialState = []

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    
    addProduct: (state) => {

    },
    updateProduct: (state) => {

    },
    deleteProduct: (state) => {

    }
  },
})


export const { getProducts, latestProducts, addProduct, updateProduct, deleteProduct } = productSlice.actions



export default productSlice.reducer