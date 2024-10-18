import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getLocalStorage } from "../utils";
export interface Data {
  [key: string]: string | number | boolean | null;
}
interface State {
  company: Data | false | null;
}
const boolean = Boolean(getLocalStorage("company"));
const companyData: Data | null = getLocalStorage("company");
const initialState: State = {
  company: boolean ? companyData : false,
};
export const companySlice = createSlice({
  name: "companySlice",
  initialState,
  reducers: {
    setCompanyData: (state, action: PayloadAction<Data | false>) => {
      state.company = action.payload;
    },
  },
});
export const { setCompanyData } = companySlice.actions;
export default companySlice.reducer;
