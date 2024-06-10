import { createSlice } from "@reduxjs/toolkit";

type ImageType ={
    loaded: boolean;
    isAdd:boolean;
}



const initialState:ImageType={
    loaded:false,
    isAdd:false,
}




export const imageSlice= createSlice({ 
    
    name:"image",
    initialState,
    reducers:{
        toggleImage:(state)=>{
            state.loaded=!state.loaded;
        },
        toggleAdd:(state)=>{
            state.isAdd=!state.isAdd;
        }
    }
})




export const { toggleImage, toggleAdd } = imageSlice.actions

export const ImageReducer= imageSlice.reducer