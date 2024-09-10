import { CustomTable } from "../../components/shared";
import { TimeContainer } from "../../components/ui";
import { LogsData, LogsDataHeader, } from "../../utils/constants";

export function LogsLog() {
  return (
    <>
      <TimeContainer />
      <CustomTable columns={LogsDataHeader} data={LogsData}  colorId={6} itemColor="red"/>
    </>
  );
}
