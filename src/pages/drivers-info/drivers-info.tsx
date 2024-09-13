import {
  CustomTable,
  Diagrams,
  DriversForm,
  DriversHeader,
  TripPlanner,
} from "../../components/shared";
// ------  MODALS

/* <DriversAddModal open={open} setOpen={setOpen}/> */
/* <Normalize open={open} setOpen={setOpen} /> */
/* <Certify open={open} setOpen={setOpen} /> */
/* <UpdateModal open={open} setOpen={setOpen} />; */
/* <TimeModal open={open} setOpen={setOpen} /> */
// const [open, setOpen] = useState<boolean>(true);

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
      <TripPlanner />
    </Wrapper>
  );
}
