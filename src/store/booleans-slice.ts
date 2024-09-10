import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Bool {
  dashboardProgress: boolean;
  sidebarActive: boolean;
}

const initialState: Bool = {
  dashboardProgress: false,
  sidebarActive: true,
};

export const booleanSlice = createSlice({
  name: "booleans",
  initialState,
  reducers: {
    dashboardProgressActive: (state) => {
      state.dashboardProgress = !state.dashboardProgress;
    },
    sidebarToggle: (state, action: PayloadAction<boolean>) => {
      state.sidebarActive = action.payload;
    },
  },
});

export const { dashboardProgressActive, sidebarToggle } = booleanSlice.actions;
export default booleanSlice.reducer;
