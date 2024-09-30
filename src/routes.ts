import React, { lazy } from "react";

//adimin page
const Dashboard = lazy(() =>
  import("./pages/Dashboard").then((module) => ({ default: module.Dashboard }))
);
const Company = lazy(() =>
  import("./pages/company/company").then((module) => ({
    default: module.Company,
  }))
);
const IftaReports = lazy(() =>
  import("./pages/ifta-reports/ifta-reports").then((module) => ({
    default: module.IftaReports,
  }))
);

const ManageCompany = lazy(() =>
  import("./pages/manage-company/manage-company").then((module) => ({
    default: module.ManageCompany,
  }))
);
const Units = lazy(() =>
  import("./pages/units/units").then((module) => ({
    default: module.Units,
  }))
);

// ------------- MANAGE-COMPANY TAB PAGE START
const TabCompany = lazy(() =>
  import("./pages/tab-company").then((module) => ({
    default: module.TabCompany,
  }))
);
const ManageTabUser = lazy(() =>
  import("./pages/company-users").then((module) => ({
    default: module.CompanyUsers,
  }))
);
const ManageKeys = lazy(() =>
  import("./pages/api-keys").then((module) => ({
    default: module.ApiKeys,
  }))
);
const ManageHistories = lazy(() =>
  import("./pages/histories").then((module) => ({
    default: module.Histories,
  }))
);
// ------------- MANAGE-COMPANY TAB PAGE END
const Drivers = lazy(() =>
  import("./pages/drivers/drivers").then((module) => ({
    default: module.Drivers,
  }))
);
const Transfer = lazy(() =>
  import("./pages/transfer/transfer").then((module) => ({
    default: module.Transfer,
  }))
);
const Users = lazy(() =>
  import("./pages/users-page").then((module) => ({
    default: module.Users,
  }))
);
const Logs = lazy(() =>
  import("./pages/logs").then((module) => ({
    default: module.Logs,
  }))
);

// -----------------LOGS PAGE START
const Map = lazy(() =>
  import("./pages/logs-map").then((module) => ({
    default: module.LogsMap,
  }))
);
const LogsLog = lazy(() =>
  import("./pages/logs-log").then((module) => ({
    default: module.LogsLog,
  }))
);
const LogsDrivers = lazy(() =>
  import("./pages/logs-drivers").then((module) => ({
    default: module.LogsDrivers,
  }))
);
const logDriversInfo = lazy(() =>
  import("./pages/drivers-info").then((module) => ({
    default: module.DriversInfo,
  }))
);
const LogsViolation = lazy(() =>
  import("./pages/violation").then((module) => ({
    default: module.Violation,
  }))
);
const LogsTracking = lazy(() =>
  import("./pages/trackings").then((module) => ({
    default: module.Trackings,
  }))
);
// -----------------LOGS PAGE END

interface Route {
  path: string;
  component: React.FC;
  status: string;
  route?: Route[];
}
export const RoutesData: Route[] = [
  {
    path: "/",
    component: Dashboard,
    status: "admin",
  },
  {
    path: "dashboard",
    component: Dashboard,
    status: "admin",
  },
  {
    path: "users",
    component: Users,
    status: "admin",
  },
  {
    path: "/units",
    component: Units,
    status: "app",
  },
  {
    path: "/company",
    component: Company,
    status: "admin",
  },

  {
    path: "manage-company",
    component: ManageCompany,
    status: "app",
    route: [
      {
        path: "company",
        component: TabCompany,
        status: "admin",
      },
      {
        path: "/manage-company/users",
        component: ManageTabUser,
        status: "admin",
      },
      {
        path: "/manage-company/keys",
        component: ManageKeys,
        status: "admin",
      },
      {
        path: "/manage-company/histories",
        component: ManageHistories,
        status: "admin",
      },
    ],
  },
  {
    path: "drivers",
    component: Drivers,
    status: "app",
  },
  {
    path: "transfer",
    component: Transfer,
    status: "admin",
  },
  {
    path: "ifta-reports",
    component: IftaReports,
    status: "app",
  },
  {
    path: "logs",
    component: Logs,
    status: "admin",
    route: [
      {
        path: "map",
        component: Map,
        status: "admin",
      },
      {
        path: "logs",
        component: LogsLog,
        status: "admin",
      },
      {
        path: "drivers",
        component: LogsDrivers,
        status: "admin",
      },
      {
        path: "info",
        component: logDriversInfo,
        status: "admin",
      },
      {
        path: "violation",
        component: LogsViolation,
        status: "admin",
      },
      {
        path: "tracking",
        component: LogsTracking,
        status: "admin",
      },
    ],
  },
];
