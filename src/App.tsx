import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import { Navbar } from "./components/shared";
import { Company } from "./pages";
function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="login" element={<Login />} />
          <Route path="company" element={<Company />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
