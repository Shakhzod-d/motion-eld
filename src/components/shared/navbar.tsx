import { Layout, Menu } from "antd";
import { Outlet, useLocation } from "react-router-dom";
import { IoMoonOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Description, HeaderDiv, User } from "./navbar-styled";
import { PiChartLineFill } from "react-icons/pi";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { FaPowerOff } from "react-icons/fa";
import { MdOutlineReportProblem } from "react-icons/md";
import { VscFileSubmodule } from "react-icons/vsc";

const { Header, Sider, Content } = Layout;

export const Navbar: React.FC = () => {
  const { pathname } = useLocation();

  const headerTitle = pathname.replace("/", "").replace("-", " ");

  return (
    <Layout>
      <Sider
        style={{
          minHeight: "100vh",
          height: "auto",
          padding: "30px 10px",
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
      <Layout>
        <Header
          style={{
            padding: "20px",
            borderRadius: "20px",
            background: "#F3F3F4",
          }}
        >
          <HeaderDiv>
            <h1>{headerTitle}</h1>
            <div>
              <IoMoonOutline size={28} />
              <IoMdNotificationsOutline size={28} />
            </div>
          </HeaderDiv>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
