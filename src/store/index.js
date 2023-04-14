import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"

const reducer = combineReducers({
    userReducer
})

export const store = configureStore({
    reducer
})
