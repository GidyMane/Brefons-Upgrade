import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface MenuState {
  isOpen: boolean
}

// Define the initial state using that type
const initialState: MenuState = {
  isOpen: false,
}

export const menuSlice = createSlice({
  name: 'sidebarmenustate',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleSidebar:(state)=>{
        state.isOpen = !state.isOpen;
    }
    
  },
})

export const { toggleSidebar } = menuSlice.actions

export const MenuReducer= menuSlice.reducer