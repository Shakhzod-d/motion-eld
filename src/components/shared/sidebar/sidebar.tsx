import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { PiChartLineFill } from "react-icons/pi";
import { Description, User } from "./sidebar-styled";
import { FaPowerOff } from "react-icons/fa";
import { MdOutlineReportProblem } from "react-icons/md";
import { VscFileSubmodule } from "react-icons/vsc";

export const Sidebar = () => {
  return (
    <Sider
      style={{
        height: "100vh",
        padding: "20px 10px",
        width: "100%",
        maxWidth: "300px!important",
        flex: " 0 0 300px",
      }}
      id="aside"
    >
      <img src="/src/assets/logo.svg" alt="" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        color="#fff"
        items={[
          { key: "1", icon: <PiChartLineFill />, label: "Dashboard" },
          {
            key: "2",
            icon: <HiOutlineBuildingLibrary />,
            label: "Company",
          },
        ]}
      />
      <Description>Menu</Description>
      <Menu
        theme="dark"
        mode="inline"
        content="#fff"
        items={[
          {
            key: "1",
            icon: <FaPowerOff />,
            label: "ELD",
          },
          {
            key: "2",
            icon: <MdOutlineReportProblem />,
            label: "Reports",
          },
          {
            key: "3",
            icon: <VscFileSubmodule />,
            label: "Fleet manager",
          },
        ]}
        style={{ flex: 1 }}
      />
      <User className="user-profile">
        <img src="/src/assets/user.png" alt="user" />
        <div>
          <h2>Jonibek Muradov</h2>
          <p>jonibek1984@gmail.com</p>
        </div>
      </User>
    </Sider>
  );
};
