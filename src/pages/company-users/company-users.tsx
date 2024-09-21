import { InfoTable } from "../../components/shared";
import { usersTableData, usersTableHeader } from "../../utils/constants";

export const CompanyUsers = () => {
  return (
    <div>
      <InfoTable header={usersTableHeader} data={usersTableData} />
    </div>
  );
};
