import { Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar";

const Layout = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ padding: "7px",}}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
