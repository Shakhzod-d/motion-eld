import { Navigate } from "react-router-dom";

import { ReactNode } from "react";

import { useAuth } from "../../hooks/useAuth";
import { PageLoad } from "../ui";

interface PrivateRouteProps {
  children: ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { loading, isAuth } = useAuth();
  if (loading) {
    return <PageLoad />;
  } else {
    if (isAuth) {
      return children;
    } else {
      return <Navigate to={"/login"} />;
    }
  }
};
