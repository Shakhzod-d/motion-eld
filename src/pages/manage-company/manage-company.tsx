import { DriversStatistics, ManageUserModal } from "../../components/shared";
import { Navbar } from "../../components/ui";
import { Main } from "../../utils";

import { Flex } from "antd";
import { MCTabPages } from "../../utils/constants";

import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { TransparentButton } from "../ifta-reports/ifta-reports-styled";
import { AddBtn } from "./manage-company-styled";
import { FaPlus } from "react-icons/fa6";

export const ManageCompany = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (String(pathname.endsWith("/company"))) navigate("company");
  }, []);

  return (
    <Main>
      <ManageUserModal open={open} setOpen={setOpen} />
      <Navbar title="Manage Company" />
      <DriversStatistics />

      <Flex justify="space-between">
        <Flex gap={5} style={{ marginBottom: "20px" }}>
          {MCTabPages.map((item) => (
            <NavLink to={item.to} key={item.key}>
              <TransparentButton
                active={String(pathname.endsWith(item.to))}
                padding="25px 10px"
              >
                {item.label}
              </TransparentButton>
            </NavLink>
          ))}
        </Flex>
        {pathname == "/manage-company/users" && (
          <AddBtn type="primary" onClick={() => setOpen(true)}>
            <FaPlus /> Add
          </AddBtn>
        )}
      </Flex>

      <Outlet />
    </Main>
  );
};
