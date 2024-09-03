import { Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar";
import { OutletWrapper } from "../../utils/index";
import { useState } from "react";
import { EhfModal } from "./ehf-modal/ehf-modal";

const Layout = () => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
      <EhfModal setOpen={setOpen} open={open} />
    </div>
  );
};

export default Layout;
