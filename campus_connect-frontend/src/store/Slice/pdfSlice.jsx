import { createSlice } from "@reduxjs/toolkit";

const pdfSlice = createSlice({
    name: "pdfView",
    initialState:{
        view: false,
        discription: null
    },
    reducers:{
        pdfView: (state)=>{
            state.view = !state.view;
        },
        pdfDiscription: (state , action) =>{
            state.discription = action.payload;
            
        }
    }
})

export const {pdfView , pdfDiscription} = pdfSlice.actions;
export default pdfSlice.reducer;