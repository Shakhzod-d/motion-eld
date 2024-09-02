import { Route, Routes } from "react-router-dom";
import {
  Company,
  IftaReports,
  ManageCompany,
  Transfer,
  Units,
  Dashboard,
  Login,
  Logs,
} from "./pages";
import Layout from "./components/shared/layout";
import "./App.css";

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
          <Route path="transfer" element={<Transfer />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="logs" element={<Logs />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
