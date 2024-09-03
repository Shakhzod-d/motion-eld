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

export const driversData = Array(70).fill({
  key: "name",
  id: "0",
  f_name: "Davis",
  l_name: "Miller",
  u_name: "captain_49",
  co_driver: "",
  driver_Type: "",
  app_version: "4.6.7",
  documents: "Not uploaded",
  activated: "2024-03-02",
  device_info: "Open",
  action: "",
});

export const driverColumns = [
  {
    title: "#",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "First Name",
    dataIndex: "f_name",
    key: "f_name",
  },
  {
    title: "Last Name",
    dataIndex: "l_name",
    key: "l_name",
  },
  {
    title: "User Name",
    dataIndex: "u_name",
    key: "u_name",
  },
  {
    title: "Co driver",
    dataIndex: "co_driver",
    key: "co_driver",
  },
  {
    title: "Driver Type",
    dataIndex: "driver_type",
    key: "driver_type",
  },
  {
    title: "Vehicle ID",
    dataIndex: "v_id",
    key: "v_id",
  },
  {
    title: "App Version",
    dataIndex: "app_version",
    key: "app_version",
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
  {
    title: "Device Info",
    dataIndex: "device_info",
    key: "device_info",
    render: (text: string) => (
      <u>
        <b>{text}</b>
      </u>
    ),
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
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

export const Between = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
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
export const SmallBox = styled.div`
  border-radius: 5px 0 0 5px;
  padding: 10px 15px;
  width: 42px;
  height: 38px;
  background: #fff;
  color: #8c8c9b;
`;
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

export const Box = styled.div`
  border-radius: 5px;
  padding: 10px 20px;
  width: 200px;
  height: 38px;
  min-width: 200px;
  background: #fff;
  color: #8c8c9b;
  margin-bottom: 10px;
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

export const LogsTabPages = [
  { label: "Map", key: "1", to: "map" },
  { label: "Drivers", key: "2", to: "drivers" },
  { label: "Logs", key: "3", to: "logs" },
  { label: "Violation", key: "4", to: "violation" },
  { label: "Trackings", key: "5", to: "tracking" },
];

export const ArticleMapItem = [
  {
    id: 1,
    title: "Aisyah Clara Riyanti ",
    text: "459, Cedar Ln, Los Angeles",
    status: "61 mph",
    desc: "Started: 03-11-2024, 02:13 EDT",
  },
  {
    id: 2,
    title: "Matthew Wilson",
    text: "937, Main St, New York",
    status: "0 mph",
    desc: "Started: 03-11-2024, 02:13 EDT",
  },
  {
    id: 3,
    title: "Mehdi Kasongo",
    text: "311, Pine Rd, New York",
    status: "SB",
    desc: "Started: 03-11-2024, 02:13 EDT",
  },
  {
    id: 4,
    title: "Kendrik Ababio",
    text: "900, Maple Ave, Houston",
    status: "SB",
    desc: "Started: 03-11-2024, 02:13 EDT",
  },
  {
    id: 5,
    title: "Mohammed Chizimu",
    text: "294, Maple Ave, New York",
    status: "SB",
    desc: "Started: 03-11-2024, 02:13 EDT",
  },
  {
    id: 6,
    title: "Ronald Kim",
    text: "990, Pine Rd, New York311, Pine Rd, New York",
    status: "OFF",
    desc: "Started: 03-11-2024, 02:13 EDT",
  },
  {
    id: 7,
    title: "Mehdi Kasongo",
    text: "311, Pine Rd, New York",
    status: "SB",
    desc: "Started: 03-11-2024, 02:13 EDT",
  },
  {
    id: 8,
    title: "Mehdi Kasongo",
    text: "311, Pine Rd, New York",
    status: "OFF",
    desc: "Started: 03-11-2024, 02:13 EDT",
  },
];
export const TrackingsMapItem = [
  {
    id: 1,
    title: "Daniel Lee",
    text: "Truck no: 103",
    status: "SB",
    desc: "Started: 03-11-2024, 02:13 EDT",
    time: "2024-01-20 00:08",
  },
  {
    id: 2,
    title: "Kimberly Miller",
    text: "Truck no: 103",
    status: "OFF",
    desc: "54, Oak St, New York, Florida",
    time: "54, Oak St, New York, Florida",
  },
  {
    id: 3,
    title: "Linda Williams",
    text: "Truck no: 103",
    status: "ON",
    desc: "424, Main St, Los Angeles, Illinois",
    time: "2024-01-20 00:08",
  },
  {
    id: 4,
    title: "John Clark",
    text: "Truck no: 103",
    status: "OFF",
    desc: "252, Cedar Ln, San Francisco, Illinois",
    time: "2024-01-20 00:08",
  },
  {
    id: 5,
    title: "John Clark",
    text: "Truck no: 103",
    status: "OFF",
    desc: "252, Cedar Ln, San Francisco, Illinois",
    time: "2024-01-20 00:08",
  },
  {
    id: 6,
    title: "John Clark",
    text: "Truck no: 103",
    status: "SB",
    desc: "252, Cedar Ln, San Francisco, Illinois",
    time: "2024-01-20 00:08",
  },
  {
    id: 7,
    title: "John Clark",
    text: "Truck no: 103",
    status: "ON",
    desc: "252, Cedar Ln, San Francisco, Illinois",
    time: "2024-01-20 00:08",
  },
  {
    id: 8,
    title: "John Clark",
    text: "Truck no: 103",
    status: "OFF",
    desc: "252, Cedar Ln, San Francisco, Illinois",
    time: "2024-01-20 00:08",
  },
];

// tab header
export const LogsDriverDataHeader = [
  { header: "ID", accessor: "id" },
  { header: "Date", accessor: "date" },
  { header: "Truck no", accessor: "truckNo" },
  { header: "Status", accessor: "status" },
  { header: "Last known Location", accessor: "location" },
  { header: "", accessor: "week" },
  { header: "Warnings & Violation", accessor: "warnings" },
  { header: "Break", accessor: "break" },
  { header: "Drive", accessor: "drive" },
  { header: "Shift", accessor: "shift" },
  { header: "Cycle", accessor: "cycle" },
  { header: "Recap", accessor: "recap" },
];
export const LogsDataHeader = [
  { header: "ID", accessor: "id" },
  { header: "Date", accessor: "date" },
  { header: "Truck no", accessor: "truckNo" },
  { header: "Status", accessor: "status" },
  { header: "Last known Location", accessor: "location" },
  { header: "", accessor: "week" },
  { header: "Warnings & Violation", accessor: "warnings" },
  { header: "Break", accessor: "break" },
  { header: "Drive", accessor: "drive" },
  { header: "Shift", accessor: "shift" },
  { header: "Cycle", accessor: "cycle" },
  { header: "Recap", accessor: "recap" },
];
export const violationTabHeader = [
  { header: "Driver", accessor: "driver" },
  { header: "Error", accessor: "error" },
  { header: "Status", accessor: "status" },
  { header: "Start", accessor: "start" },
  { header: "Address", accessor: "address" },
  { header: "Odometer", accessor: "odometer" },
  { header: "Engine hours", accessor: "hours" },
];

// tab info
export const LogsDriverData = [
  {
    id: 1,
    date: "1/1/2020",
    truckNo: 2358,
    status: "DR",
    location: "835, Trần Hưng Đạo",
    warnings: "No Signature!",
    break: "04:37",
    drive: "04:34",
    shift: "27:25",
    cycle: "27:25",
    recap: "00:00",
    week: "13 weeks ago",
  },
  {
    id: 2,
    date: "1/9/2018",
    truckNo: 3389,
    status: "OFF",
    location: "682, Trần Hưng Đạo",
    warnings: "Trailer is not set",
    break: "04:37",
    drive: "04:34",
    shift: "27:25",
    cycle: "27:25",
    recap: "00:00",
    week: "13 weeks ago",
  },
  {
    id: 3,
    date: "1/1/2020",
    truckNo: 2358,
    status: "DR",
    location: "835, Trần Hưng Đạo",
    warnings: "BOL is not set",
    break: "04:37",
    drive: "04:34",
    shift: "27:25",
    cycle: "27:25",
    recap: "00:00",
    week: "13 weeks ago",
  },
  {
    id: 4,
    date: "1/9/2018",
    truckNo: 3389,
    status: "OFF",
    location: "682, Trần Hưng Đạo",
    warnings: "11 hours driving limit ",
    break: "04:37",
    drive: "04:34",
    shift: "27:25",
    cycle: "27:25",
    recap: "00:00",
    week: "13 weeks ago",
  },
  {
    id: 5,
    date: "1/1/2020",
    truckNo: 2358,
    status: "DR",
    location: "835, Trần Hưng Đạo",
    warnings: "8 hours break limit",
    break: "04:37",
    drive: "04:34",
    shift: "27:25",
    cycle: "27:25",
    recap: "00:00",
    week: "13 weeks ago",
  },
];
export const violationTabData = [
  {
    driver: "Larry Jones",
    error: "Malf. Start",
    status: "",
    start: "10:35:15 PM",
    address: "3.33 mi N of Urie, WY",
    odometer: "518983",
    hours: "1946.6",
  },
  {
    driver: "Carol Lau",
    error: "Codriver odometer is wrong 03-12-2024 02:25:13 AM",
    status: "OFF",
    start: "10:35:15 PM",
    address: "3.33 mi N of Urie, WY",
    odometer: "518983",
    hours: "1946.6",
  },
  {
    driver: "Melissa Wilson",
    error: "Power log status duplication",
    status: "poweron",
    start: "10:35:15 PM",
    address: "0.45 mi SE of Joseph City, AZ",
    odometer: "1",
    hours: "1",
  },
  {
    driver: "Brenda Martin",
    error: "Odometer change incorrect",
    status: "poweron",
    start: "10:35:15 PM",
    address: "0.45 mi SE of Joseph City, AZ",
    odometer: "1",
    hours: "1",
  },
  {
    driver: "Greg Anderson",
    error: "Certify log while driving",
    status: "certify",
    start: "10:35:15 PM",
    address: "0.45 mi SE of Joseph City, AZ",
    odometer: "",
    hours: "",
  },
];
export const LogsData = [
  {
    id: 1,
    date: "1/1/2020",
    truckNo: 2358,
    status: "DR",
    location: "835, Trần Hưng Đạo",
    warnings: "",
    break: "04:37",
    drive: "04:34",
    shift: "27:25",
    cycle: "27:25",
    recap: "00:00",
    week: "",
  },
  {
    id: 2,
    date: "1/9/2018",
    truckNo: 3389,
    status: "OFF",
    location: "682, Trần Hưng Đạo",
    warnings: "",
    break: "04:37",
    drive: "04:34",
    shift: "27:25",
    cycle: "27:25",
    recap: "00:00",
    week: "",
  },
  {
    id: 3,
    date: "1/1/2020",
    truckNo: 2358,
    status: "DR",
    location: "835, Trần Hưng Đạo",
    warnings: "",
    break: "04:37",
    drive: "04:34",
    shift: "27:25",
    cycle: "27:25",
    recap: "00:00",
    week: "13 weeks ago",
  },
  {
    id: 4,
    date: "1/9/2018",
    truckNo: 3389,
    status: "SB",
    location: "682, Trần Hưng Đạo",
    warnings: "",
    break: "04:37",
    drive: "04:34",
    shift: "27:25",
    cycle: "27:25",
    recap: "00:00",
    week: "11 days ago",
  },
  {
    id: 5,
    date: "1/1/2020",
    truckNo: 2358,
    status: "ON",
    location: "835, Trần Hưng Đạo",
    warnings: "",
    break: "04:37",
    drive: "04:34",
    shift: "27:25",
    cycle: "27:25",
    recap: "00:00",
    week: "10 days ago",
  },
];
