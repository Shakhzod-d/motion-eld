import {
  BtnWrap,
  Description,
  Img,
  PageActive,
  PageBtn,
  SidebarContainer,
  TabBtn,
  User,
} from "./sidebar-styled";
import Logo from "../../../assets/logo.svg";
import { PiChartLineFill } from "react-icons/pi";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { FaPowerOff } from "react-icons/fa";
import { MdOutlineReportProblem } from "react-icons/md";
import { VscFileSubmodule } from "react-icons/vsc";
import { useState } from "react";

const items = [
  {
    key: 1,
    icon: <FaPowerOff />,
    label: "ELD",
    page: [
      { id: 1, text: "- Logs", url: "/logs" },
      { id: 2, text: " -  Transfer", url: "/" },
    ],
  },
  {
    key: 2,
    icon: <MdOutlineReportProblem />,
    label: "Reports",
    page: [
      { id: 1, text: " -  Ifta Reports", url: "/" },
      { id: 2, text: " -  Driver Reports", url: "/" },
      { id: 3, text: " -  DVIR Reports", url: "/" },
    ],
  },
  {
    key: 3,
    icon: <VscFileSubmodule />,
    label: "Fleet manager",
    page: [
      { id: 1, text: " -  Units", url: "/" },
      { id: 2, text: "  -  Drivers", url: "/" },
      { id: 3, text: " -  Manage company", url: "/" },
    ],
  },
];
export const Sidebar = () => {
  const [btnActive, setBtnActive] = useState<number>(0);
  return (
    <SidebarContainer>
      <Img src={Logo} alt="" />
      <div style={{ flex: "1" }}>
        <PageBtn onClick={() => setBtnActive(0)} to={"/"}>
          <PiChartLineFill />
          <p>Dashboard</p>
        </PageBtn>

        <PageBtn onClick={() => setBtnActive(0)} to={"/company"}>
          <HiOutlineBuildingLibrary />
          <p>Company</p>
        </PageBtn>
        <Description>Menu</Description>
        {items.map((item) => {
          const Icon = () => item.icon; 
          return (
            <TabBtn key={item.key} onClick={() => setBtnActive(item.key)}>
              <BtnWrap>
                <Icon />
                <p>{item.label}</p>
              </BtnWrap>

              {btnActive == item.key &&
                item.page?.map((i) => {
                  return (
                    <PageActive key={i.id} to={i.url}>
                      <p>{i.text}</p>
                    </PageActive>
                  );
                })}
            </TabBtn>
          );
        })}
      </div>
      <User className="user-profile">
        <img src="/src/assets/user.png" alt="user" />
        <div>
          <h2>Jonibek Muradov</h2>
          <p>jonibek1984@gmail.com</p>
        </div>
      </User>
    </SidebarContainer>
  );
};
