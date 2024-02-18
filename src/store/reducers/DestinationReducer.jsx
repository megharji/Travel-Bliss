import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    destinations: null,
}

export const DestinationSlice = createSlice({ 
    name: "destinations",
    initialState,
    reducers:{
        getDestination: (state, action) =>{
            state.destinations = action.payload
        }
    },

});

export const {getDestination} = DestinationSlice.actions
export default DestinationSlice.reducer