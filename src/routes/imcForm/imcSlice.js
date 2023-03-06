import { createSlice } from "@reduxjs/toolkit";

const imcSlice = createSlice({
  name: "imc",
  initialState: {
    imc: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addImcAction(state, action) {
      state.imc.push(action.payload)
    },
    setImcAction(state, action) {
      state.imc = action.payload
    },
    editImcAction(state, action) {
      const {id} = action.payload
      const imcFound = state.imc.find(r => r.id === id)
      if (imcFound) {
        state.imc = [...state.imc.filter(r => r.id !== id), action.payload]
      }
    },
    deleteImcAction(state, action) {
      const id = action.payload
      const imcFound = state.imc.find(r => r.id === id)
      if (imcFound) {
        state.imc = state.imc.filter(r => r.id !== id)
      }
    }
  }
})

export const { addImcAction, setImcAction, editImcAction, deleteImcAction } = imcSlice.actions

export default imcSlice.reducer