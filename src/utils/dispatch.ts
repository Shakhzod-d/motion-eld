import { setSelect } from "../store/booleans-slice";
import { setAuth, setData } from "../store/isAuth";
import { store } from "../store/store";
import { SelectData } from "../types";

const { dispatch } = store;
export const setIsAuth = (actions: boolean) => dispatch(setAuth(actions));
export const DriversSelectId = (data: SelectData[]) =>
  dispatch(setSelect(data));
export const setUser = (data: object) => dispatch(setData(data));
