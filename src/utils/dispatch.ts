import { setPageLoad, setSelect } from "../store/booleans-slice";
import { Data, setCompanyData } from "../store/company-slice";
import { setAuth, setData } from "../store/isAuth";
import { store } from "../store/store";
import { SelectData } from "../types";

const { dispatch } = store;
export const setIsAuth = (actions: boolean) => dispatch(setAuth(actions));
export const DriversSelectId = (data: SelectData[]) =>
  dispatch(setSelect(data));
export const setUser = (data: object) => dispatch(setData(data));

export const setCompany = (data: false | Data) =>
  dispatch(setCompanyData(data));

export const setPageLoading = (data: boolean) => dispatch(setPageLoad(data));
