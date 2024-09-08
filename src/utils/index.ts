import { createBrowserHistory } from "history";

export {
  transferData,
  transferBtns,
  transferColums,
  Main,
  unitsColumns,
  unitsData,
  unitsButtons,
  manageCompanyButtons,
  IftaReportButtons,
  IftaReportColData,
  IftaReportData,
  IftaReportSelectData,
  OutletWrapper,
  InfoCard,
  btnArr,
  driversStatisticsData,
  driversData,
  LogsDriverData,
  LogsData,
  LogsDataHeader,
  LogsDriverDataHeader,
  violationTabData,
  violationTabHeader,
  driverColumns,
  driverEditModalBtns,
  ehfModalColums,
  ehfModalData,
  logFormModalColums,
  LogsTabPages,
  logFormModalData,
  editUserModalBtns,
  editUserRoleModalBtns,
} from "./constants";
export const history = createBrowserHistory();
export const historyPush = (path: string) => {
  history.push(path);
};
