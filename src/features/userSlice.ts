import {createSlice} from "@reduxjs/toolkit";
import { InitialUserState } from "../Type";

const initialState : InitialUserState = {
    user:null
}

export const userSlice = createSlice({
    name:"user",
    initialState:initialState,
    reducers:{
    login:(state, action)=>{
        state.user = action.payload ;   },
    logout:(state) => {
        state.user = null
        },
},
});

export default userSlice.reducer;

export const { login, logout} = userSlice.actions