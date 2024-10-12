import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SelectData } from "../types";

interface Bool {
  dashboardProgress: boolean;
  sidebarActive: boolean;
  MCompanyPages: string;
  darkMode: boolean;
  driverSelect: SelectData[] | [];
}

const initialState: Bool = {
  dashboardProgress: false,
  sidebarActive: true,
  MCompanyPages: "company",
  darkMode: false,
  driverSelect: [],
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
    setSelect: (state, action: PayloadAction<SelectData[]>) => {
      state.driverSelect = action.payload;
    },
  },
});

export const {
  dashboardProgressActive,
  sidebarToggle,
  setTabPages,
  setDarkMode,
  setSelect,
} = booleanSlice.actions;

export default booleanSlice.reducer;
