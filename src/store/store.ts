import { configureStore } from "@reduxjs/toolkit";
import booleanReducer from "./booleans-slice";
import isAuth from "./isAuth";
import { companySlice } from "./company-slice";

export const store = configureStore({
  reducer: {
    booleans: booleanReducer,
    isAuth: isAuth,
    company: companySlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
