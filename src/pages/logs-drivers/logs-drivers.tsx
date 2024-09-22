import { useNavigate } from "react-router-dom";
import { CustomTable } from "../../components/shared";
import { TimeContainer } from "../../components/ui";
import { LogsDriverData, LogsDriverDataHeader } from "../../utils/constants";

export function LogsDrivers() {
  const navigate = useNavigate();
  const driversInfoHandler = () => {
    navigate("/logs/info");
  };

  return (
    <>
      <TimeContainer />

      <CustomTable
        columns={LogsDriverDataHeader}
        data={LogsDriverData}
        onClick={driversInfoHandler}
        colorId={7}
        itemColor="red"
      />
    </>
  );
}
