import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const farmersSlice = createSlice({
  name: 'farmers',
  initialState,
  reducers: {
    getFarmers: (state) => {

    }
    ,
    addFarmer: (state) => {

    },
    updateFarmer: (state) => {

    },
    deleteFarmer: (state) => {

    }
  },
})

export const { getFarmers, addFarmer, updateFarmer, deleteFarmer } = farmersSlice.actions

export default farmersSlice.reducer