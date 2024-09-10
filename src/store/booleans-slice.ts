import { createSlice } from "@reduxjs/toolkit";

interface Bool {
  dashboardProgress: boolean;
}

const initialState: Bool = {
  dashboardProgress: false,
};

export const booleanSlice = createSlice({
  name: "booleans",
  initialState,
  reducers: {
    dashboardProgressActive: (state) => {
      state.dashboardProgress = !state.dashboardProgress;
    },
  },
});

export const { dashboardProgressActive } = booleanSlice.actions;
export default booleanSlice.reducer;

