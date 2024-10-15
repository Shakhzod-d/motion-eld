import { Route, Routes } from "react-router-dom";

import Layout from "./components/shared/layout";
import { RoutesData } from "./routes";
import { Login } from "./pages";
import { Suspense } from "react";
import { NotFound } from "./pages/not-found/not.found";

import { PrivateRoute } from "./components/shared/Private-route";
import { PageLoad } from "./components/ui";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { getLocalStorage } from "./utils";
// import { ThemeProvider } from "styled-components";
// import { darkTheme, lightTheme } from "./utils/theme";
// import { useSelector } from "react-redux";
// import { RootState } from "./store/store";

function App() {
  const company = useSelector((state: RootState) => state.company.company) ||getLocalStorage("company");
  // const dark = useSelector((state: RootState) => state.booleans.darkMode);
  const excludePaths = ["/units", "drivers", "manage-company/company"];

  const filteredRoutes = RoutesData.filter(
    (item) => !excludePaths.includes(item.path)
  );

  const filterRout = company
    ? RoutesData.filter((item) => item.path !== "/company")
    : filteredRoutes;
  return (
    <>
      {/* <ThemeProvider theme={dark ? darkTheme : lightTheme}> */}
      <Suspense fallback={<PageLoad />}>
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
      </Suspense>
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
