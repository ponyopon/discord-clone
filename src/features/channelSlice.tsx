import {createSlice} from "@reduxjs/toolkit";
import { InitialChannelState, InitialUserState } from "../Type";

const initialState : InitialChannelState = {
    channelId:null,
    channelName:null
}

export const channelSlice = createSlice({
    name:"channel",
    initialState:initialState,
    reducers:{
    setChannelInfo: (state,action) => {
        state.channelId = action.payload.channelId
        state.channelName = action.payload.channelName
    }
        },
},
);

export default channelSlice.reducer;

export const { setChannelInfo} = channelSlice.actions