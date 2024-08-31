import { TableProps } from "antd";
import { IftaReportColumns } from "../types";

export const manageCompanyButtons = [
  { id: 1, text: "Company" },
  { id: 2, text: "Profile" },
  { id: 3, text: "Users" },
  { id: 4, text: "Api keys" },
  { id: 5, text: "Histories" },
];

export const IftaReportButtons = [
  { id: 1, text: "Vehicle" },
  { id: 2, text: "State" },
];

export const IftaReportData: IftaReportColumns[] = Array(7).fill({
  key: "0",
  options: [
    {
      text: "148",
    },
    {
      text: "AR",
    },
    {
      text: "43",
    },
  ],
});

export const IftaReportColData: TableProps<IftaReportColumns>["columns"] = [
  {
    title: "Vehicle",
    key: "vehicle",
  },
  {
    title: "State",
    key: "state",
  },
  {
    title: "Melis",
    key: "melis",
  },
];

export const IftaReportSelectData = [
  {
    id: "0",
    defaultValue: "default",
    options: [{ value: "default", label: "Year" }],
  },
  {
    id: "1",
    defaultValue: "default",
    options: [{ value: "default", label: "1 quarter" }],
  },
  {
    id: "2",
    defaultValue: "default",
    options: [{ value: "default", label: "State" }],
  },
  {
    id: "3",
    defaultValue: "default",
    options: [{ value: "default", label: "Vehicle" }],
  },
];
