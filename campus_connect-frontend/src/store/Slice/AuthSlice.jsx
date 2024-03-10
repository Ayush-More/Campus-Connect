import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: "auth",
    initialState:{
        token: null
    },
    reducers:{
        setCredentials:(state, action)=>{
        
          state.token = action.payload
          localStorage.setItem("jwt-token",action.payload);
          
        },
        logout:(state)=>{
            localStorage.removeItem("jwt-token");
            state.token = null
        },
    }
}) 
export const {setCredentials, logout} = AuthSlice.actions;
export default AuthSlice.reducer;