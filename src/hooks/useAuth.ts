import { useEffect, useState } from "react";
import { getLocalStorage, removeLocalStorage } from "../utils";
import { getUserData } from "../api/calls/authCall";
import { AxiosResponse } from "axios";
import { Obj, ObjType } from "../types/helper.type";

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
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };
  return { loading, isAuth };
};
