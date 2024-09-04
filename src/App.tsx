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
  Drivers,
  LogsMap,
  LogsLog,
  LogsDrivers,
  Violation,
  Trackings,
  DriversInfo,
} from "./pages";
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
          <Route path="drivers" element={<Drivers />} />
          <Route path="transfer" element={<Transfer />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="logs" element={<Logs />}>
            <Route path="map" element={<LogsMap />} />
            <Route path="logs" element={<LogsLog />} />
            <Route path="drivers" element={<LogsDrivers />} />
            <Route path="violation" element={<Violation />} />
            <Route path="tracking" element={<Trackings />} />
            <Route path="info" element={<DriversInfo />} />
          </Route>
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
