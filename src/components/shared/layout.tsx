import { Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar";
import { OutletWrapper } from "../../utils/index";
import { DriverEditModal } from "./driver-edit-modal/driver-edir-modal";

const Layout = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
      <DriverEditModal />
    </div>
  );
};

export default Layout;
