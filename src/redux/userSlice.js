import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  photo: '',
  uid: '',
  userProducts: [],
  userEvents: []
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state) => {

    }
  },
})

export const { login } = userSlice.actions

export default userSlice.reducer