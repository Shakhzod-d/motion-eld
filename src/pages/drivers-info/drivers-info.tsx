import {
  CustomTable,
  Diagrams,
  DriversForm,
  DriversHeader,
  TripPlanner,
} from "../../components/shared";
import { Correction } from "../../components/shared/drivers-info-modal/correction";

// ------  MODALS

/* <DriversAddModal open={open} setOpen={setOpen}/> */
/* <Normalize open={open} setOpen={setOpen} /> */
/* <Certify open={open} setOpen={setOpen} /> */
/* <UpdateModal open={open} setOpen={setOpen} />; */

{
  /* <EhfModal open={true} setOpen={setState} /> */
}
// const [open, setOpen] = useState<boolean>(true);

import { driversTableData, driversTableHeader } from "../../utils/constants";

import { Btn, FlexWrapper, Wrapper } from "./info-styled";
export function DriversInfo() {
  return (
    <Wrapper>
      {/* <Correction /> */}
      <DriversHeader />
      <Diagrams />
      <FlexWrapper gap={"10px"} justify="end">
        <Btn type="primary" $bg="#FC973A">
          Bulk Edit
        </Btn>
        <Btn type="primary">Deactivate</Btn>
      </FlexWrapper>

      <div style={{ marginBottom: "40px" }}>
        <CustomTable
          columns={driversTableHeader}
          data={driversTableData}
          copyId={5}
        />
      </div>

      <DriversForm />
      <TripPlanner />
    </Wrapper>
  );
}
