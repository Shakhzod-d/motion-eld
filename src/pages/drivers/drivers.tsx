import { useState } from "react";
import { PrimaryBtn, TopContainer } from "../units/units-styled";

import { driverColumns, Main } from "../../utils";
import { Navbar, PageLoad } from "../../components/ui";
import { CustomTable, DriversModal } from "../../components/shared";
import { BtnWrap, ActiveBtn, DefaultBtn } from "./styled";
import useApi from "../../hooks/useApi";
import { companyDrivers } from "../../utils/mapData";

export const Drivers = () => {
  const [open, setOpen] = useState(false);

  const { data, isLoading, refetch } = useApi("/drivers", {
    page: 1,
    limit: 1000,
  });

  const drivers = companyDrivers(data ? data?.data?.data : []);
  return (
    <>
      <Main>
        <Navbar title={"Drivers"} />

        <TopContainer>
          <PrimaryBtn
            style={{ padding: "20px 35px" }}
            onClick={() => setOpen(true)}
          >
            Add new Driver
          </PrimaryBtn>
        </TopContainer>

        <BtnWrap>
          <ActiveBtn>Vehicle</ActiveBtn>
          <DefaultBtn>Deactivated</DefaultBtn>
        </BtnWrap>
        {isLoading ? (
          <PageLoad h="calc(100vh - 400px)" />
        ) : drivers.drivers.length != 0 ? (
          <CustomTable columns={driverColumns} data={drivers.drivers} />
        ) : (
          <>
            <CustomTable columns={driverColumns} data={[{}]} /> <p>No Data</p>
          </>
        )}
      </Main>
      <DriversModal open={open} setOpen={setOpen} refetch={refetch} />
    </>
  );
};
