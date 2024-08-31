import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/shared";
import { Company, Dashboard, Drivers, IftaReports, Units } from "./pages";
import { Login } from "./pages";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Navbar />}>
          <Route path="company" element={<Company />} />
          <Route path="units" element={<Units />} />
          <Route path="drivers" element={<Drivers />} />
          <Route path="ifta-reports" element={<IftaReports />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
