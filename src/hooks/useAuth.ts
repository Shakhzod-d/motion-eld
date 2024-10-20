import { useEffect, useState } from "react";
import { getLocalStorage, removeLocalStorage } from "../utils";
import { getUserData } from "../api/calls/authCall";
import { AxiosError, AxiosResponse } from "axios";
import { Obj, ObjType } from "../types/helper.type";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    authFun();
  }, []);
  const authFun = async () => {
    if (getLocalStorage("token")) {
      try {
        setLoading(true);
        const res = await getUserData();
        const data: AxiosResponse<Obj, ObjType> = res;

        setIsAuth(data?.success);
      } catch (err) {
        console.log(err);
        removeLocalStorage("token");
        removeLocalStorage("company");
        removeLocalStorage("roleId");
        removeLocalStorage("companyId");
        setIsAuth(false);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };
  return { loading, isAuth };
};
const errMessage = ["Unauthorized 1", "Unauthorized"];
export const useErrAuth = () => {
  const navigate = useNavigate();
  const errFun = (err: AxiosError | unknown) => {
    if (errMessage.includes(err.message)) {
      return navigate("/login");
      removeLocalStorage("token");
      removeLocalStorage("roleId");
      removeLocalStorage("company");
      removeLocalStorage("companyId");
    } else {
      // return navigate("/login");
      return console.log(err.message);
    }
  };
  return { errFun };
};
