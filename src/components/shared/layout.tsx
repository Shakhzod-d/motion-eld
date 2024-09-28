import { Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar";
import { OutletWrapper } from "../../utils/index";
import { TimeModal } from "./driving-info-modals";
import { useState } from "react";
// import { useState } from "react";
// import { TimePickerModal } from "./time-picker-modal/time-picker-modal";
// import { EhfModal } from "./ehf-modal/ehf-modal";
// import { LogFormModal } from "./log-form-modal/log-form-modal";
// import { UserEditModal } from "./user-edit-modal";

const Layout = () => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
      <TimeModal setOpen={setOpen} open={open} />
      {/* <UserEditModal setOpen={setOpen} open={open} /> */}
    </div>
  );
};

export default Layout;
