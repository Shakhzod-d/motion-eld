import { useState } from "react";
import { PrimaryBtn, TopContainer } from "../units/units-styled";

import { driverColumns, driversData, Main } from "../../utils";
import { Navbar } from "../../components/ui";
import { CustomTable, DriversModal } from "../../components/shared";
import { BtnWrap, ActiveBtn, DefaultBtn } from "./styled";

export const Drivers = () => {
  const [open, setOpen] = useState(false);
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
        <CustomTable columns={driverColumns} data={driversData} />
      </Main>
      <DriversModal open={open} setOpen={setOpen} />
    </>
  );
};
