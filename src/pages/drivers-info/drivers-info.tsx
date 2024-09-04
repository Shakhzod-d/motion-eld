import {
  CustomTable,
  Diagrams,
  DriversForm,
  DriversHeader,
  TripPlanner,
} from "../../components/shared";
import { driversTableData, driversTableHeader } from "../../utils/constants";
import { Wrapper } from "./info-styled";
export function DriversInfo() {
  return (
    <Wrapper>
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
