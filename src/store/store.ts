import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { counterSlice } from "./counter";

const reducer = combineReducers({
  counter: counterSlice.reducer,
});

export const store = configureStore({
  reducer,
});
