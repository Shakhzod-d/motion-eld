import { configureStore } from "@reduxjs/toolkit";
import booleanReducer from "./booleans-slice";
import isAuth from "./isAuth";

export const store = configureStore({
  reducer: {
    booleans: booleanReducer,
    isAuth: isAuth,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
