import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    getEvents: (state) => {

    }
    ,
    addEvent: (state) => {

    },
    updateEvent: (state) => {

    },
    deleteEvent: (state) => {

    }
  },
})

export const { getEvents, addEvent, updateEvent, deleteEvent } = eventsSlice.actions

export default eventsSlice.reducer