import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Company, IftaReports, ManageCompany, Units, Logs } from "./pages";
import { Login } from "./pages";
import { Dashboard } from "./pages";
import Layout from "./components/shared/layout";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="company" element={<Company />} />
          <Route path="logs" element={<Logs />} />
          <Route path="iftaReports" element={<IftaReports />} />
          <Route path="manageCompany" element={<ManageCompany />} />
          <Route path="units" element={<Units />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
