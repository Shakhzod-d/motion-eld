import { Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar";
import { OutletWrapper } from "../../utils/index";
import { useState } from "react";
import { TimePickerModal } from "./time-picker-modal/time-picker-modal";

const Layout = () => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <div style={{ display: "flex", width:"100%"}}>
      <Sidebar />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
      <TimePickerModal setOpen={setOpen} open={open} />
    </div>
  );
};

export default Layout;
