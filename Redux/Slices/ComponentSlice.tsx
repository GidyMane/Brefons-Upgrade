import { createSlice } from "@reduxjs/toolkit";

type EditComponent = {
  isOpen: boolean;
  isAdd: boolean;
};

const initialState = {
  isOpen: false,
  isAdd: false,
};

const editSlice = createSlice({
  name: "editcomponent",
  initialState,

  reducers: {
    toggleEditComponent: (state: EditComponent) => {
      state.isOpen = !state.isOpen;
    },
    toggleAddComponent: (state: EditComponent) => {
      state.isAdd = !state.isAdd;
    },
  },
});

export const { toggleEditComponent, toggleAddComponent } = editSlice.actions;

export const EditReducer = editSlice.reducer;
