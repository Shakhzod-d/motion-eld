import {
  ArrowBtn,
  BtnWrap,
  Description,
  PageActive,
  PageBtn,
  SidebarContainer,
  StyleFlex,
  StyleLogo,
  TabBtn,
  User,
} from "./sidebar-styled";
import Logo from "../../../assets/logo.svg";
import { PiChartLineFill } from "react-icons/pi";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { FaPowerOff } from "react-icons/fa";
import {
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineReportProblem,
} from "react-icons/md";
import { VscFileSubmodule } from "react-icons/vsc";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { sidebarToggle } from "../../../store/booleans-slice";
import { Text } from "../../../utils/constants";

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
    page: [{ id: 1, text: " -  Ifta Reports", url: "/ifta-reports" }],
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
  const active = useSelector(
    (state: RootState) => state.booleans.sidebarActive
  );
  const dispatch = useDispatch();
  const tabBtnFun = (key: number) => {
    if (key > 0) {
      setBtnActive(key);
      dispatch(sidebarToggle(true));
    } else {
      dispatch(sidebarToggle(active ? false : true));
      setBtnActive(0);
    }
  };
  return (
    <SidebarContainer $active={active}>
      <StyleFlex align="center" justify="space-between" $active={active}>
        {active && <StyleLogo src={Logo} alt="" />}
        <ArrowBtn $active={active} onClick={() => tabBtnFun(0)}>
          <MdOutlineKeyboardDoubleArrowRight color="white" size={25} />
        </ArrowBtn>
      </StyleFlex>
      <div style={{ flex: "1" }}>
        <PageBtn onClick={() => setBtnActive(0)} to={"/"} $active={active}>
          <PiChartLineFill />
          {active && <p>Dashboard</p>}
        </PageBtn>

        <PageBtn
          onClick={() => setBtnActive(0)}
          to={"/company"}
          $active={active}
        >
          <HiOutlineBuildingLibrary />
          {active && <p>Company</p>}
        </PageBtn>

     

        <Description>Menu</Description>
        {items.map((item) => {
          const Icon = () => item.icon;
          return (
            <TabBtn
              key={item.key}
              onClick={() => tabBtnFun(item.key)}
              $active={active}
            >
              <BtnWrap>
                <Icon />
                {active && <p>{item.label}</p>}
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
        <PageBtn onClick={() => setBtnActive(0)} to={"/users"} $active={active}>
          <p>Users</p>
        </PageBtn>
      </div>
      <User className="user-profile">
        <img src="/src/assets/user.png" alt="user" />
        {active && (
          <div>
            <h2>Jonibek Muradov</h2>
            <Text size={12} color="#fff">jonibek1984@gmail.com</Text>
          </div>
        )}
      </User>
    </SidebarContainer>
  );
};
