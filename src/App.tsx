import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/shared";
import { Company, Drivers, IftaReports, ManageCompany, Units } from "./pages";
import { Login } from "./pages";
import { Dashboard } from "./pages/Dashboard/Dashboard";
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
          <Route path="company" element={<Company />} />
          <Route index element={<Dashboard />} />
          <Route path="ifta-reports" element={<IftaReports />} />
          <Route path="manage-company" element={<ManageCompany />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
