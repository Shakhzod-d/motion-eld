import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/shared";
import { Company } from "./pages";
import { Login } from "./pages";
import { ConfigProvider, theme } from "antd";
import { useState } from "react";
import { Dashboard } from "./pages/Dashboard/Dashboard";
// import { dark, light } from "./utils";
function App() {
  const [themeValue, _] = useState<string>("light");
  const { defaultAlgorithm, darkAlgorithm } = theme;
  return (
    <>
      <ConfigProvider
        theme={{
          algorithm: themeValue == "light" ? defaultAlgorithm : darkAlgorithm,
        }}
      >
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Navbar />}>
            <Route path="company" element={<Company />} />
          </Route>

          <Route path="/" element={<Dashboard />} />
        </Routes>
      </ConfigProvider>
    </>
  );
}

export default App;
