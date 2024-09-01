/* eslint-disable react-refresh/only-export-components */
import { TableProps } from "antd";
import { IftaReportColumns } from "../types";
import styled from "styled-components";

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

export const unitsButtons = [
  { id: 1, text: "Vehicle" },
  { id: 2, text: "Deactivated" },
];

export const IftaReportColData: TableProps<IftaReportColumns>["columns"] = [
  {
    title: "Vehicle",
    dataIndex: "vehicle",
    key: "vehicle",
  },
  {
    title: "State",
    dataIndex: "state",
    key: "state",
  },
  {
    title: "Melis",
    dataIndex: "melis",
    key: "melis",
  },
];

export const IftaReportData = [
  {
    key: "0",
    vehicle: "143",
    state: "AD",
    melis: "43",
  },
  {
    key: "1",
    vehicle: "143",
    state: "AD",
    melis: "43",
  },
  {
    key: "2",
    vehicle: "143",
    state: "AD",
    melis: "43",
  },
  {
    key: "4",
    vehicle: "143",
    state: "AD",
    melis: "43",
  },
  {
    key: "5",
    vehicle: "143",
    state: "AD",
    melis: "43",
  },
  {
    key: "6",
    vehicle: "143",
    state: "AD",
    melis: "43",
  },
  {
    key: "7",
    vehicle: "143",
    state: "AD",
    melis: "43",
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

export const unitsColumns = [
  {
    title: "#",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Vehicle ID",
    dataIndex: "index",
    key: "index",
  },
  {
    title: "Drivers",
    dataIndex: "driver_name",
    key: "drivers_name",
  },
  {
    title: "Make/Model",
    dataIndex: "model",
    key: "model",
  },
  {
    title: "Eld",
    dataIndex: "eld",
    key: "eld",
  },
  {
    title: "Notes",
    dataIndex: "notes",
    key: "notes",
  },
  {
    title: "VIN",
    dataIndex: "vin",
    key: "vin",
  },
  {
    title: "Documents",
    dataIndex: "documents",
    key: "documents",
  },
  {
    title: "Activated",
    dataIndex: "activated",
    key: "activated",
  },
];

export const unitsData = Array(10).fill({
  id: "0",
  index: 152,
  driver_name: "Davit Kiknavelidze",
  model: "Freightliner/ Cascadia",
  eld: "PT30_09A3",
  notes: "1FUJGLDV2HLJH2911",
  vin: "Not uploaded",
  documents: "2024-03-02",
  activated: "",
});

export const transferBtns = [
  { id: 1, text: "Map" },
  { id: 2, text: "Drivers" },
  { id: 3, text: "Logs" },
];

export const transferColums = [
  {
    title: "Driver",
    dataIndex: "driver",
    key: "driver",
    render: (title: string) => <b style={{ fontWeight: "900" }}> {title}</b>,
  },
  {
    title: "Comment",
    dataIndex: "comment",
    key: "comment",
  },
  {
    title: "Start Date",
    dataIndex: "start_date",
    key: "start_date",
  },
  {
    title: "End Date",
    dataIndex: "end_date",
    key: "end_date",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Processed Time",
    dataIndex: "p_time",
    key: "p_time",
  },
  {
    title: "Submission ID",
    dataIndex: "s_id",
    key: "s_id",
  },
];

export const transferData = Array(3).fill({
  driver: "Koba Gogelashvili",
  comment: "in7558",
  start_date: "Thu, Feb 22, 00:00, EST",
  end_date: "Thu, Feb 29, 23:59, EST",
  status: "Information",
  p_time: "Thu, Feb 29, 17:34, EST",
  s_id: "693a6d13-dd88-4e00-a546-d6a9c8d97da9",
});

export const Main = styled.main`
  border-radius: 20px;
  padding: 0 20px 20px 20px;
  width: 100%;
  max-width: 100vw;
  min-height: calc(100vh - 15px);
  background: #f3f3f4;
  overflow: "hidden";
`;

export const OutletWrapper = styled.div`
  padding: 10px;
  width: 100%;
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
];

export const driversStatisticsData = [
  { id: 1, text: "On duty", statistics_number: "0", color: "#3DA8d5" },
  { id: 2, text: "Drive", statistics_number: "2", color: "#32BE61" },
  { id: 3, text: "Off duty", statistics_number: "3", color: "#8C8C9B" },
  { id: 4, text: "Sleeper", statistics_number: "6", color: "#FC973A" },
];
