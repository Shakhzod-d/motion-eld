import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface State {
  isAuth: boolean;
}
const initialState: State = {
  isAuth: false,
};

export const isAuth = createSlice({
  name: "isAuth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
});

export const { setAuth } = isAuth.actions;

export default isAuth.reducer;
