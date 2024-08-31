<<<<<<< HEAD
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
=======
import styled from "styled-components";

export const Main = styled.main`
  border-radius: 20px;
  padding: 0 20px 20px 20px;
  width: 100%;
  height: calc(100vh - 5px);
  background: #f3f3f4;
  overflow: "hidden";
`;

export const InfoCard = styled.div`
  border-radius: 15px;
  padding: 25px;
  width: 100%;
  max-width: 517px;
  height: 244px;
  background: #fff;
`;
export const btnArr = [
  { id: 1, text: "8D", border: "10px 2px 2px 10px" },
  { id: 2, text: "12D", border: "2px" },
  { id: 3, text: "30D", border: "2px 10px 10px 2px" },
>>>>>>> 09629f2cc2bbf7b84d9bc46ef253c1d8d20ac667
];
