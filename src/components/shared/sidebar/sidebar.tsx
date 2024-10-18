import {
  ArrowBtn,
  BtnWrap,
  CompanyIcon,
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
import { Link, useNavigate } from "react-router-dom";
import { removeLocalStorage } from "../../../utils";
import { setCompany } from "../../../utils/dispatch";
import useApi from "../../../hooks/useApi";

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
    label: "Notification",
  },
  {
    key: 4,
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
  const navigate = useNavigate();

  const { data } = useApi("/companies", {
    page: 1,
    limit: 1000,
  });

  const active = useSelector(
    (state: RootState) => state.booleans.sidebarActive
  );

  const exitFun = () => {
    removeLocalStorage("company");
    removeLocalStorage("companyId");
    setCompany(false);
    navigate("/company");
  };

  const companyData = useSelector((state: RootState) => state.company.company);
  const companyPage = ["Fleet manager", "ELD", "Reports"];
  const filterData = items.filter(
    (item) => item.label && !companyPage.includes(item.label)
  );
  const sidebarData = companyData ? items : filterData;

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
        {active && (
          <Link to={"/"}>
            <StyleLogo src={Logo} alt="" />
          </Link>
        )}
        <ArrowBtn $active={active} onClick={() => tabBtnFun(0)}>
          <MdOutlineKeyboardDoubleArrowRight color="white" size={25} />
        </ArrowBtn>
      </StyleFlex>
      <div style={{ flex: "1" }}>
        <PageBtn onClick={() => setBtnActive(0)} to={"/"} $active={active}>
          <PiChartLineFill />
          {active && <p>Dashboard</p>}
        </PageBtn>

        {!companyData ? (
          <PageBtn
            onClick={() => setBtnActive(0)}
            to={"/company"}
            $active={active}
          >
            <HiOutlineBuildingLibrary />

            {active && (
              <>
                <p>Company</p>{" "}
                <p style={{ marginLeft: "50px" }}>{data?.data.data.length}</p>
              </>
            )}
          </PageBtn>
        ) : (
          <User
            className="light user-profile"
            $background="#FFF"
            color="#000"
            onClick={exitFun}
          >
            <CompanyIcon>
              <p>{String(companyData?.companyName).slice(0, 1)}</p>
            </CompanyIcon>
            {active && (
              <div>
                <h2>{companyData?.companyName}</h2>
              </div>
            )}
          </User>
        )}

        <Description>Menu</Description>
        {sidebarData.map((item) => {
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

              {!active ||
                (btnActive == item.key &&
                  item.page?.map((i) => {
                    return (
                      <PageActive key={i.id} to={i.url}>
                        {/* <TbDeviceSdCard /> */}
                        {active && <p>{i.text}</p>}
                      </PageActive>
                    );
                  }))}
            </TabBtn>
          );
        })}
        <PageBtn onClick={() => setBtnActive(0)} to={"/users"} $active={active}>
          <p>Users</p>
        </PageBtn>
      </div>

      <User className="user-profile">
        <img src="/user.png" alt="user" />
        {active && (
          <div>
            <h2>Jonibek Muradov</h2>
            <Text size={12} color="#fff">
              jonibek1984@gmail.com
            </Text>
          </div>
        )}
      </User>
    </SidebarContainer>
  );
};
