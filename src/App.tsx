import { Route, Routes } from "react-router-dom";
import "./App.css";
<<<<<<< HEAD
import Login from "./pages/Login";
import { Navbar } from "./components/shared";
import { Company } from "./pages";
=======
import { Login } from "./pages";
import { Button, ConfigProvider, theme } from "antd";
import { useState } from "react";
// import { dark, light } from "./utils";
>>>>>>> 599df86c417c071fb04492c9e2f749c43cf2613c
function App() {
  const [themeValue, setTheme] = useState<string>("light");
  const { defaultAlgorithm, darkAlgorithm } = theme;
  return (
    <>
<<<<<<< HEAD
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="login" element={<Login />} />
          <Route path="company" element={<Company />} />
        </Route>
      </Routes>
=======
      <ConfigProvider theme={{ algorithm: themeValue=="light"?defaultAlgorithm:darkAlgorithm}}>
        <Button onClick={()=>setTheme(e=>e=="light"?"dark":"light")}>{themeValue=="dark"?"light":"dark"}</Button>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </ConfigProvider>
>>>>>>> 599df86c417c071fb04492c9e2f749c43cf2613c
    </>
  );
}

export default App;
