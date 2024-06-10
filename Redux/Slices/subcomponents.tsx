import { createSlice } from "@reduxjs/toolkit";

type SubComponent = {
    isEdit: boolean;
    isView: boolean;
    data: any;
    isAddSubComponent: boolean;
};

const initialState: SubComponent = {
    isEdit: false,
    isView: false,
    data: null,
    isAddSubComponent:false
};

export const subComponentSlice = createSlice({
    name: "subcomponent",
    initialState,
    reducers: {
        toggleSubComponent: (state) => {
            state.isEdit = !state.isEdit;
        },
        toggleAddSubComponent: (state) => {
            state.isAddSubComponent = !state.isAddSubComponent;
        },
        setSubComponent: (state, action) => {
            state.data = action.payload;
        },
        setSubComponentView: (state, action) => {
            state.data = action.payload;
            state.isView = !state.isView;
        },
    }
});

export const { toggleSubComponent, setSubComponent, setSubComponentView,toggleAddSubComponent } = subComponentSlice.actions;

export const SubComponentReducer = subComponentSlice.reducer;
