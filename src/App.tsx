import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import Layout from "./components/shared/layout";
import { getRoutesData,  } from "./routes";
import { Login } from "./pages";
import { useEffect } from "react";
import { NotFound } from "./pages/not-found/not.found";

import { PrivateRoute } from "./components/shared/Private-route";

import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { getLocalStorage } from "./utils";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/theme";

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const company =
    useSelector((state: RootState) => state.company.company) ||
    getLocalStorage("company");
  const dark = useSelector((state: RootState) => state.booleans.darkMode);
  useEffect(() => {
    if (!company && pathname == "/") {
      navigate("/company");
    }
    if (company && pathname == "/") {
      navigate(`/companyId=${company && company?._id}/main/dashboard`);
    }
  }, [pathname]);

  const RoutesData =getRoutesData()
  const filteredRoutes = RoutesData.filter((item) => item.sortPage == "app");
  
  
  const filterRout = company
    ? RoutesData.filter((item) => item.sortPage == "company")
    : filteredRoutes;

  return (
    <>
      <ThemeProvider theme={dark ? darkTheme : lightTheme}>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                {" "}
                <Layout />
              </PrivateRoute>
            }
          >
            {filterRout.map((page) => {
              const Component = page.component;
              const bool = page.route;
              if (bool) {
                return (
                  <Route
                    path={page.path}
                    element={<Component />}
                    key={page.path}
                  >
                    {bool.map((data) => {
                      const Component = data.component;
                      return (
                        <Route
                          path={data.path}
                          element={
                            <PrivateRoute>
                              {" "}
                              <Component />
                            </PrivateRoute>
                          }
                          key={data.path}
                        />
                      );
                    })}
                  </Route>
                );
              } else {
                return (
                  <Route
                    path={page.path}
                    element={<Component />}
                    key={page.path}
                  />
                );
              }
            })}
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
