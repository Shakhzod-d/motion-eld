import React from "react";

//adimin page
import { Dashboard } from "./pages/Dashboard";
import { Company } from "./pages/company/company";
import { IftaReports } from "./pages/ifta-reports/ifta-reports";
import { ManageCompany } from "./pages/manage-company/manage-company";
import { Units } from "./pages/units/units";

// ------------- MANAGE-COMPANY TAB PAGE START
import { TabCompany } from "./pages/tab-company";
import { CompanyUsers as ManageTabUser } from "./pages/company-users";
import { ApiKeys as ManageKeys } from "./pages/api-keys";
import { Histories as ManageHistories } from "./pages/histories";
// ------------- MANAGE-COMPANY TAB PAGE END
import { Drivers } from "./pages/drivers/drivers";
import { Transfer } from "./pages/transfer/transfer";
import { Users } from "./pages/users-page";
import { Logs } from "./pages/logs";

// -----------------LOGS PAGE START
import { LogsMap as Map } from "./pages/logs-map";
import { LogsLog } from "./pages/logs-log";
import { LogsDrivers } from "./pages/logs-drivers";
import { DriversInfo as logDriversInfo } from "./pages/drivers-info";
import { Violation as LogsViolation } from "./pages/violation";
import { Trackings as LogsTracking } from "./pages/trackings";
import { getLocalStorage } from "./utils";

// -----------------LOGS PAGE END

interface Route {
  path: string;
  component: React.FC;
  status: string;
  route?: Route[];
  sortPage: string;
}

// Funksiyani eksport qilamiz
export const getRoutesData = (): Route[] => {
  // Har safar chaqirilganda localStorage-dan yangi qiymatlarni oladi
  const companyId = getLocalStorage("companyId");
  const driverId = getLocalStorage("driverId");

  return [
    {
      path: `/companyId=${companyId}/main/dashboard`,
      component: Dashboard,
      status: "admin",
      sortPage: "company",
    },
    {
      path: "users",
      component: Users,
      status: "admin",
      sortPage: "app",
    },
    {
      path: `/companyId=${companyId}/units`,
      component: Units,
      status: "app",
      sortPage: "company",
    },
    {
      path: "company",
      component: Company,
      status: "admin",
      sortPage: "app",
    },
    {
      path: `/companyId=${companyId}/manage-company`,
      component: ManageCompany,
      status: "app",
      sortPage: "company",
      route: [
        {
          path: "company",
          component: TabCompany,
          status: "admin",
          sortPage: "company",
        },
        
        {
          path: `users`,
          component: ManageTabUser,
          status: "admin",
          sortPage: "company",
        },
        {
          path: `keys`,
          component: ManageKeys,
          status: "admin",
          sortPage: "company",
        },
        {
          path: `histories`,
          component: ManageHistories,
          status: "admin",
          sortPage: "company",
        },
      ],
    },
    {
      path: `companyId=${companyId}/drivers`,
      component: Drivers,
      status: "app",
      sortPage: "company",
    },
    {
      path: `companyId=${companyId}/transfer`,
      component: Transfer,
      status: "admin",
      sortPage: "company",
    },
    {
      path: `companyId=${companyId}/ifta-reports`,
      component: IftaReports,
      status: "app",
      sortPage: "company",
    },
    {
      path: `companyId=${companyId}/logs`,
      component: Logs,
      status: "admin",
      sortPage: "company",
      route: [
        {
          path: "map",
          component: Map,
          status: "admin",
          sortPage: "company",
        },
        {
          path: "log",
          component: LogsLog,
          status: "admin",
          sortPage: "company",
        },
        {
          path: "drivers",
          component: LogsDrivers,
          status: "admin",
          sortPage: "company",
        },
        {
          path: `drivers/driverID=${driverId}`,
          component: logDriversInfo,
          status: "admin",
          sortPage: "company",
        },
        {
          path: "violation",
          component: LogsViolation,
          status: "admin",
          sortPage: "company",
        },
        {
          path: "tracking",
          component: LogsTracking,
          status: "admin",
          sortPage: "company",
        },
      ],
    },
  ];
};
