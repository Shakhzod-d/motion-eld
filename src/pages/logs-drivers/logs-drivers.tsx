import { useNavigate } from "react-router-dom";
import { CustomTable } from "../../components/shared";
import { PageLoad, TimeContainer } from "../../components/ui";
import { LogsDriverDataHeader } from "../../utils/constants";
import useApi from "../../hooks/useApi";
import { companyDrivers } from "../../utils/mapData";
import { setLocalStorage } from "../../utils";

export function LogsDrivers() {
  const navigate = useNavigate();

  const { data, isLoading } = useApi("/drivers", {
    page: 1,
    limit: 1000,
  });
  const driversData = companyDrivers(data ? data.data.data : []);
  const driversInfoHandler = (id: string) => {
    setLocalStorage("driverId", id);
    navigate(`driverId=${id}`);
  };

  return (
    <>
      <TimeContainer />
      {isLoading ? (
        <PageLoad h="90%" />
      ) : (
        <CustomTable
          columns={LogsDriverDataHeader}
          data={driversData ? driversData.logDrivers : []}
          onClick={driversInfoHandler}
        />
      )}
    </>
  );
}
