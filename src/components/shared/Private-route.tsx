import { Navigate,} from "react-router-dom";

import { ReactNode,  useState } from "react";


import api from "../../api";
import { getLocalStorage } from "../../utils";
interface PrivateRouteProps {
  children: ReactNode;
}
const getUserData = async (company_id: string | null) => {
  try {
    const res = await api.get(
      `/user${company_id ? `?company_id=${company_id}` : ""}`
    );
    const data = res.data;
    console.log(data);
    
    return true;
  } catch (error) {
    if (error) {
      return false;
    }
  }
};

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const [bool, setBool] = useState<boolean>(true);

  const authFun = async () => {
    const res = await getUserData(getLocalStorage("companyId"));
    await setBool(res ? res : false);
  };
  authFun();
  if (bool) {
    return children;
  } else {
  return  <Navigate to={"/login"} />;
  }
};
