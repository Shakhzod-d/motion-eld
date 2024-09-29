import { setAuth } from "../store/isAuth";
import { store } from "../store/store";

const { dispatch } = store;
export const setIsAuth = (actions: boolean) => dispatch(setAuth(actions));
