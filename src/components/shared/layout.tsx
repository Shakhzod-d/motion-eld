import { Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar";
import { OutletWrapper } from "../../utils/index";

const Layout = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </div>
  );
};

export default Layout;
