import { setSelect } from "../store/booleans-slice";
import { setAuth } from "../store/isAuth";
import { store } from "../store/store";
import { SelectData } from "../types";

const { dispatch } = store;
export const setIsAuth = (actions: boolean) => dispatch(setAuth(actions));
export const DriversSelectId = (data: SelectData[]) =>
  dispatch(setSelect(data));
