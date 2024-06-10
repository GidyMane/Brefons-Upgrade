import { createSlice } from "@reduxjs/toolkit";

type SubIndicator={
    isEdit:boolean;
    data:any;
}


const initialState:SubIndicator={
    isEdit:false,
    data:null,
}


export const subIndicatorSlice = createSlice({
    name:"subindicator",
    initialState,
    reducers:{
        toggleSubIndicator:(state)=>{
            state.isEdit=!state.isEdit;
        },
        setSubIndicator:(state,action)=>{
            state.data=action.payload;
        }
    }
}
)

export const { toggleSubIndicator, setSubIndicator } = subIndicatorSlice.actions

export const SubIndicatorReducer = subIndicatorSlice.reducer;

