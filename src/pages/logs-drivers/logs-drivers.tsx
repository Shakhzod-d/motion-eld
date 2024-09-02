import { CustomTable } from "../../components/shared";
import { TimeContainer } from "../../components/ui";
import { LogsDriverData, LogsDriverDataHeader } from "../../utils/constants";


export function LogsDrivers() {
  return (
    <>
    <TimeContainer/>
      <CustomTable columns={LogsDriverDataHeader} data={LogsDriverData} />
    </>
  );
}
