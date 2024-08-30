import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./pages";
import { ConfigProvider, theme } from "antd";
import { useState } from "react";
import { Dashboard } from "./pages/Dashboard/Dashboard";
// import { dark, light } from "./utils";
function App() {
  const [themeValue, setTheme] = useState<string>("light");
  const { defaultAlgorithm, darkAlgorithm } = theme;
  return (
    <>
      <ConfigProvider
        theme={{
          algorithm: themeValue == "light" ? defaultAlgorithm : darkAlgorithm,
        }}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </ConfigProvider>
    </>
  );
}

export default App;
