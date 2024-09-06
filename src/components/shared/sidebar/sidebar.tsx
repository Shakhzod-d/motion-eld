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
import { useLocation } from "react-router-dom";

const items = [
  {
    key: 1,
    icon: <FaPowerOff />,
    label: "ELD",
    page: [
      { id: 1, text: "- Logs", url: "/logs" },
      { id: 2, text: " -  Transfer", url: "/transfer" },
    ],
  },
  {
    key: 2,
    icon: <MdOutlineReportProblem />,
    label: "Reports",
    page: [
      { id: 1, text: " -  Ifta Reports", url: "/ifta-reports" },

    ],
  },
  {
    key: 3,
    icon: <VscFileSubmodule />,
    label: "Fleet manager",
    page: [
      { id: 1, text: " -  Units", url: "/units" },
      { id: 2, text: "  -  Drivers", url: "/drivers" },
      { id: 3, text: " -  Manage company", url: "/manage-company" },
    ],
  },
];
export const Sidebar = () => {
  const [btnActive, setBtnActive] = useState<number>(0);
  const { pathname } = useLocation();
  return (
    <SidebarContainer>
      <Img src={Logo} alt="" />
      <div style={{ flex: "1" }}>
        <PageBtn onClick={() => setBtnActive(0)} to={"/"}>
          <PiChartLineFill />
          <p>Dashboard</p>
        </PageBtn>

        {pathname == "/company" ? (
          <PageBtn onClick={() => setBtnActive(0)} to={"/company"}>
            <HiOutlineBuildingLibrary />
            <p>Company</p>
          </PageBtn>
        ) : (
          <User className="light user-profile" background="#FFF" color="#000">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="42"
              viewBox="0 0 41 42"
              fill="none"
            >
              <circle cx="20.5" cy="21.3734" r="20.5" fill="#F80638" />
              <path
                d="M17.1211 27.8734H14.1719V13.7816H17.1211V20.2074H17.209L22.502 13.7816H25.7832L20.5684 20.0316L26.1445 27.8734H22.6191L18.4395 21.9847L17.1211 23.5668V27.8734Z"
                fill="white"
              />
            </svg>
            <div>
              <h2>
                Karavan logistics <br /> group LLC
              </h2>
              <p>Zava Zava</p>
            </div>
          </User>
        )}

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
