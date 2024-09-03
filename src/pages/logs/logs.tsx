import { Flex } from "antd";
import { DriversStatistics } from "../../components/shared";
import { Navbar } from "../../components/ui";
import { Main } from "../../utils";
import { LogsTabPages } from "../../utils/constants";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { TransparentButton } from "../ifta-reports/ifta-reports-styled";
import { useEffect } from "react";
// import { ReflashButton, StyleTabs } from "./logs-styled";
// import { ReflashButton, StyleTabs } from "./logs-styled";

export const Logs = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  console.log(pathname);

  useEffect(() => {
    if (pathname.length <= 6) navigate("map");
  }, [navigate, pathname.length]);

  return (
    <Main>
      <Navbar title="Logs" />
      <DriversStatistics />

      <Flex justify="space-between">
        <Flex gap={5} style={{ marginBottom: "20px" }}>
          {LogsTabPages.map((item) => (
            <NavLink to={item.to} key={item.key}>
              <TransparentButton
                active={String(pathname.endsWith(item.to))}
                padding="35px 20px"
              >
                {item.label}
              </TransparentButton>
            </NavLink>
          ))}
        </Flex>

        <TransparentButton padding="35px 20px">Reflash</TransparentButton>
      </Flex>

      <Outlet />
    </Main>
  );
};
