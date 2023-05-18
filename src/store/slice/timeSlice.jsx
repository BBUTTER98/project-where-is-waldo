import { createSlice } from "@reduxjs/toolkit";

export const timeSlice = createSlice({
    name:"time",
    initialState:0,
    reducers:{
        addTime(state, action){
            return state+1
        }
    }
})
export const {addTime} = timeSlice.actions
