import { Flex } from "antd";
import { DriversStatistics } from "../../components/shared";
import { Navbar } from "../../components/ui";
import { Main } from "../../utils";
import { LogsTabPages, Reload } from "../../utils/constants";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { TransparentButton } from "../ifta-reports/ifta-reports-styled";
import { useEffect } from "react";
import { MdRestartAlt } from "react-icons/md";

export const Logs = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

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
              width="120px"
                active={String(pathname.endsWith(item.to))}
                padding="0 25px"
              >
                {item.label}
              </TransparentButton>
            </NavLink>
          ))}
        </Flex>

        <TransparentButton onClick={Reload} padding="15px 25px">
          <MdRestartAlt />
          Refresh
        </TransparentButton>
      </Flex>

      <Outlet />
    </Main>
  );
};
