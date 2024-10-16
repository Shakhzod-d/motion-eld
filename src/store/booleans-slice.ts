import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SelectData } from "../types";
import { getLocalStorage } from "../utils";

interface Bool {
  dashboardProgress: boolean;
  sidebarActive: boolean;
  MCompanyPages: string;
  darkMode: boolean;
  driverSelect: SelectData[] | [];
  pageLoading: boolean;
}
const dark_mode = getLocalStorage("darkMode");
const initialState: Bool = {
  dashboardProgress: false,
  sidebarActive: true,
  MCompanyPages: "company",
  darkMode: Boolean(dark_mode),
  driverSelect: [],
  pageLoading: false,
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
      state.darkMode = Boolean(getLocalStorage("darkMode"));
    },
    setSelect: (state, action: PayloadAction<SelectData[]>) => {
      state.driverSelect = action.payload;
    },
    setPageLoad: (state, action: PayloadAction<boolean>) => {
      state.pageLoading = action.payload;
    },
  },
});

export const {
  dashboardProgressActive,
  sidebarToggle,
  setTabPages,
  setDarkMode,
  setSelect,
  setPageLoad,
} = booleanSlice.actions;

export default booleanSlice.reducer;
