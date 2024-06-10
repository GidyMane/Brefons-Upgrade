import { createSlice } from "@reduxjs/toolkit";

type IndicatorTableSlice ={
    data:any;
    isAdd:boolean;
    isEditable:boolean;
    indicatorId:string;
    isSub:boolean;
}



const initialState:IndicatorTableSlice={
    data:[],
    isAdd:false,
    isEditable:false,
    indicatorId:"",
    isSub:false,
}



export const indicatorTableSlice= createSlice({
    name:"indicatortable",
    initialState,
    reducers:{
        toggleAddIndicatorTable:(state)=>{
            state.isAdd=!state.isAdd;
        },
        toggleEditIndicatorTable:(state)=>{
            state.isEditable=!state.isEditable;
        },
        setIndicatorId:(state,action)=>{
            state.indicatorId=action.payload;
        },
        toggleViewSubIndicator:(state)=>{
            state.isSub=!state.isSub;
        }
        
    }
})


export const { toggleAddIndicatorTable, toggleEditIndicatorTable, setIndicatorId, toggleViewSubIndicator } = indicatorTableSlice.actions

export const IndicatorTableReducer= indicatorTableSlice.reducer