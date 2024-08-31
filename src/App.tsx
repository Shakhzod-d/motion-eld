import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Company, IftaReports, ManageCompany, Units } from "./pages";
import { Login } from "./pages";
import { Dashboard } from "./pages";
import Layout from "./components/shared/layout";
import { Logs } from "./pages/Logs/Logs";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="company" element={<Company />} />
          <Route path="units" element={<Units />} />
          <Route path="ifta-reports" element={<IftaReports />} />
          <Route path="manage-company" element={<ManageCompany />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
