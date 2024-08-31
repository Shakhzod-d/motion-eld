import { Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import { Navbar } from "./components/shared";
import { Company, Drivers, IftaReports, ManageCompany, Units } from "./pages";
import { Login } from "./pages";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import "./App.css";

=======
import "./App.css";
import { Company } from "./pages";
import { Login } from "./pages";
import { Dashboard } from "./pages";
import Layout from "./components/shared/layout";
>>>>>>> 09629f2cc2bbf7b84d9bc46ef253c1d8d20ac667
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="company" element={<Company />} />
<<<<<<< HEAD
          <Route path="units" element={<Units />} />
          <Route path="drivers" element={<Drivers />} />
          <Route path="company" element={<Company />} />
          <Route index element={<Dashboard />} />
          <Route path="ifta-reports" element={<IftaReports />} />
          <Route path="manage-company" element={<ManageCompany />} />
=======
>>>>>>> 09629f2cc2bbf7b84d9bc46ef253c1d8d20ac667
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
