import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/shared";
import { Company } from "./pages";
import { Login } from "./pages";
import { Button, ConfigProvider, theme } from "antd";
import { useState } from "react";
// import { dark, light } from "./utils";
function App() {
  const [themeValue, setTheme] = useState<string>("light");
  const { defaultAlgorithm, darkAlgorithm } = theme;
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Navbar />}>
          <Route path="company" element={<Company />} />
        </Route>
      </Routes>
      <ConfigProvider
        theme={{
          algorithm: themeValue == "light" ? defaultAlgorithm : darkAlgorithm,
        }}
      >
        <Button
          onClick={() => setTheme((e) => (e == "light" ? "dark" : "light"))}
        >
          {themeValue == "dark" ? "light" : "dark"}
        </Button>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </ConfigProvider>
    </>
  );
}

export default App;
