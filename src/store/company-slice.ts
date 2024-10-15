import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface Data {
  [key: string]: string | number | boolean | null;
}
interface State {
  company: Data | false ;
}
const initialState: State = {
  company: false,
};
export const companySlice = createSlice({
  name: "companySlice",
  initialState,
  reducers: {
    setCompanyData:(state, action: PayloadAction<|Data|false>) => {
      state.company = action.payload;
    },
  },
});
export const { setCompanyData } = companySlice.actions;
export default companySlice.reducer;
