import { Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar";
import { OutletWrapper } from "../../utils/index";
import { PageLoad } from "../ui";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
// import { useState } from "react";
// import { TimePickerModal } from "./time-picker-modal/time-picker-modal";
// import { EhfModal } from "./ehf-modal/ehf-modal";
// import { LogFormModal } from "./log-form-modal/log-form-modal";
// import { UserEditModal } from "./user-edit-modal";

const Layout = () => {
  // const [open, setOpen] = useState<boolean>(true);
  const pageLoading = useSelector(
    (state: RootState) => state.booleans.pageLoading
  );
  return (
    <div>
      {pageLoading && <PageLoad />}

      <div style={{ display: "flex" }}>
        <Sidebar />
        <OutletWrapper>
          <Outlet />
        </OutletWrapper>
        {/* <UserEditModal setOpen={setOpen} open={open} /> */}
      </div>
    </div>
  );
};

export default Layout;
