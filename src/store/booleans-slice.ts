import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Bool {
  dashboardProgress: boolean;
  sidebarActive: boolean;
  MCompanyPages: string;
  darkMode: boolean;
}

const initialState: Bool = {
  dashboardProgress: false,
  sidebarActive: true,
  MCompanyPages: "company",
  darkMode: false,
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
    setTabPages: (state, action: PayloadAction<string>) => {
      state.MCompanyPages = action.payload;
    },
    setDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const {
  dashboardProgressActive,
  sidebarToggle,
  setTabPages,
  setDarkMode,
} = booleanSlice.actions;

export default booleanSlice.reducer;
