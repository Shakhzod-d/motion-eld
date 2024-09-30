import { Navigate } from "react-router-dom";
import { getLocalStorage } from "../../utils";
import { ReactNode } from "react";
interface PrivateRouteProps {
  children: ReactNode; 
}
export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  if (getLocalStorage("token")) {
    return children;
  } else {
   return <Navigate to={"/login"} />;
  }
};
