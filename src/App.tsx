import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Company, IftaReports, ManageCompany, Transfer, Units } from "./pages";
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
          <Route path="units" element={<Units />} />
          <Route path="ifta-reports" element={<IftaReports />} />
          <Route path="manage-company" element={<ManageCompany />} />
          {/* <Route path="/logs" element={<Logs />} /> */}
          <Route path="transfer" element={<Transfer />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
