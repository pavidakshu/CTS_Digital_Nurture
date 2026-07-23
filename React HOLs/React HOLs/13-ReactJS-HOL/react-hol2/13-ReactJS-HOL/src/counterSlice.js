import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0, history: [] },
  reducers: {
    increment: (state) => {
      state.value += 1
      state.history.push(`Incremented to ${state.value}`)
    },
    decrement: (state) => {
      state.value -= 1
      state.history.push(`Decremented to ${state.value}`)
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
      state.history.push(`Added ${action.payload}, now ${state.value}`)
    },
    reset: (state) => {
      state.value = 0
      state.history = []
    }
  }
})

export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions
export default counterSlice.reducer
