import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./pages";
import { Button, ConfigProvider, theme } from "antd";
import { useState } from "react";
// import { dark, light } from "./utils";
function App() {
  const [themeValue, setTheme] = useState<string>("light");
  const { defaultAlgorithm, darkAlgorithm } = theme;
  return (
    <>
      <ConfigProvider theme={{ algorithm: themeValue=="light"?defaultAlgorithm:darkAlgorithm}}>
        <Button onClick={()=>setTheme(e=>e=="light"?"dark":"light")}>{themeValue=="dark"?"light":"dark"}</Button>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </ConfigProvider>
    </>
  );
}

export default App;
