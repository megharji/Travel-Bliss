import { configureStore } from "@reduxjs/toolkit";
import DestinationReducer from "./reducers/DestinationReducer";

export const store = configureStore({
    reducer: {
        DestinationReducer : DestinationReducer
    },
});