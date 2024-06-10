import { createSlice } from "@reduxjs/toolkit";

type SubProject = {
  isAdd: boolean;
  isEdit: boolean;
  isEditUpdate: boolean;
  row: any;
};

const initialState: SubProject = {
  isAdd: false,
  isEdit: false,
  isEditUpdate: false,
  row: {},
};

export const subProjectSlice = createSlice({
  name: "subproject",
  initialState,
  reducers: {
    toggleSubProject: (state) => {
      state.isAdd = !state.isAdd;
    },
    toggleEditSubProject: (state) => {
      state.isEdit = !state.isEdit;
    },
    toggleEditUpdateSubProject: (state) => {
      state.isEditUpdate = !state.isEditUpdate;
    },
    setRowSubProject: (state, action) => {
      state.row = action.payload;
    },
  },
});

export const {
  toggleSubProject,
  toggleEditSubProject,
  toggleEditUpdateSubProject,
  setRowSubProject,
} = subProjectSlice.actions;

export const SubProjectReducer = subProjectSlice.reducer;
