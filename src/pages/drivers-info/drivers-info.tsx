import { useState } from "react";
import {
  CustomTable,
  Diagrams,
  DriversAddModal,
  DriversForm,
  DriversHeader,
  TripPlanner,
} from "../../components/shared";
import { driversTableData, driversTableHeader } from "../../utils/constants";
import { Wrapper } from "./info-styled";
export function DriversInfo() {
  const [open,setOpen] =useState<boolean>(true)
  return (
    <Wrapper>
      <DriversAddModal open={open} setOpen={setOpen}/>
      <DriversHeader />
      <Diagrams />
      <div style={{ marginBottom: "40px" }}>
        <CustomTable columns={driversTableHeader} data={driversTableData} />
      </div>
      <DriversForm />
      <TripPlanner/>
    </Wrapper>
  );
}
