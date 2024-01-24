import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface counter {
     value: number  
   }
   
   const initialState: counter = {
       value:0
   }
   
   const countSlice = createSlice({
     name: 'counter',
     initialState,
     reducers: {
          increment:state =>{
               state.value = state.value + 1 
          },
          decrement:state =>{
               state.value = state.value - 1 
          },
          incrementByTen:(state, action: PayloadAction<number>) =>{
               state.value += action.payload
          },
          decrementByTen:(state, action: PayloadAction<number>) =>{
               state.value -= action.payload
          },
     },
   })
   
   export const { increment, incrementByTen, decrement,decrementByTen} = countSlice.actions
   
   export default countSlice.reducer