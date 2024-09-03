import { Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar";
import { OutletWrapper } from "../../utils/index";
import { useState } from "react";
import { LogFormModal } from "./log-form-modal/log-form-modal";

const Layout = () => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
      <LogFormModal setOpen={setOpen} open={open} />
    </div>
  );
};

export default Layout;
