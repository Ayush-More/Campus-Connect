import { createSlice } from "@reduxjs/toolkit";

const FavouriteSlice = createSlice({
    name:"Favourite",
    initialState:{
        id:[]
    },
    reducers:{
        setFavourities:(state , action)=>{
            state.id.push(action.payload);
            
        },
        removeFavourities:(state , action)=>{
            state.id.pop(action.payload);
           
        }
    }
})

export const {setFavourities , removeFavourities} = FavouriteSlice.actions;
export default FavouriteSlice.reducer;