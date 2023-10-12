import { configureStore } from "@reduxjs/toolkit";
import actionReducer from './actions'

export const store = configureStore({
    reducer: {
        counter: actionReducer,
    },
 });