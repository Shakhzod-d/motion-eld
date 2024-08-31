import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Company } from "./pages";
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
          <Route path="logs" element={<Logs />} />

        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
