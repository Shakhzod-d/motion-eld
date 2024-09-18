/* eslint-disable react-refresh/only-export-components */
import { Button, Checkbox, TableProps } from "antd";
import { IftaReportColumns } from "../types";
import styled, { keyframes, css } from "styled-components";
import { StatusBadge } from "../components/shared/custom-table/custom-styled";
import { MdCheckBoxOutlineBlank, MdModeEdit } from "react-icons/md";


import { HiPhone } from "react-icons/hi2";
import { RiUser3Fill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";

export const manageCompanyButtons = [
  { id: 1, text: "Company" },
  { id: 2, text: "Profile" },
  { id: 3, text: "Users" },
  { id: 4, text: "Api keys" },
  { id: 5, text: "Histories" },
];
export const Text = styled.p<{
  size?: number;
  $font?: string;
  color?: string;
  $mb?: string;
  $line?: string;
}>`
  font-weight: ${({ $font }) => $font};
  font-size: ${({ size }) => `${size}px`};
  letter-spacing: -0.03em;
  color: ${({ color }) => color};
  display: flex;
  margin-bottom: ${({ $mb }) => $mb};
  line-height: ${({ $line }) => $line};
`;

export const driversData = [
  {
    id: "0",
    f_name: "Davis",
    l_name: "Miller",
    u_name: "captain_49",
    co_driver: "",
    vehicle: "",
    driver_Type: "",
    app_version: "4.6.7",
    documents: "Not uploaded",
    activated: "2024-03-02",
    device_info: "Open",
    action: "",
  },
];

export const driverColumns = [
  {
    header: "#",
    accessor: "id",
    id: 1,
  },
  {
    header: "First Name",
    accessor: "f_name",
    id: 2,
  },
  {
    header: "Last Name",
    accessor: "l_name",
    id: 3,
  },
  {
    header: "User Name",
    accessor: "u_name",
    id: 4,
  },
  {
    header: "Co driver",
    accessor: "Co_driver",
    id: 5,
  },
  {
    header: "Driver Type",
    accessor: "driver_Type",
    id: 6,
  },
  {
    header: "Vehicle ID",
    accessor: "vehicle",
    id: 7,
  },
  {
    header: "App version",
    accessor: "app_version",
    id: 8,
  },
  {
    header: "Documents",
    accessor: "documents",
    id: 9,
  },
  {
    header: "Activated",
    accessor: "activated",
    id: 10,
  },
  {
    header: "Device Info",
    accessor: "device_info",
    id: 11,
    render: (text: string) => (
      <u>
        <b>{text}</b>
      </u>
    ),
  },
  {
    header: "Action",
    accessor: "action",
    id: 12,
  },
];

export const IftaReportButtons = [
  { id: 1, text: "Vehicle" },
  { id: 2, text: "State" },
];

export const CustomButton = styled(Button)<{
  padding?: string;
  $background?: string;
  height?: string;
  color?: string;
  width?: string;
  mb?: string;
}>`
  background: ${({ $background }) => $background};
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
  height: ${({ height }) => height};
  color: ${({ color }) => color};
  margin-bottom: ${({ mb }) => mb};
  &:hover {
    background: ${({ $background }) => $background}!important;
    opacity: 0.7;
  }
`;
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
    header: "#",
    accessor: "id",
    id: 1,
  },
  {
    header: "Vehicle ID",
    accessor: "vehicle",
    id: 2,
  },
  {
    header: "Drivers",
    accessor: "drivers",
    id: 3,
  },
  {
    header: "Make/Model",
    accessor: "model",
    id: 4,
  },
  {
    header: "Eld",
    accessor: "eld",
    id: 5,
  },

  {
    header: "VIN",
    accessor: "vin1",
    id: 6,
  },
  {
    header: "VIN",
    accessor: "vin2",
    id: 7,
  },
  {
    header: "Documents",
    accessor: "documents",
    id: 8,
  },
  {
    header: "Activated",
    accessor: "activated",
    id: 8,
  },
];

export const Between = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const unitsData = Array(10).fill({
  id: "1",
  vehicle: 152,
  drivers: "Davit Kiknavelidze",
  model: "Freightliner/ Cascadia",
  eld: "PT30_09A3",
  vin1: "1FUJGLDV2HLJH2911",
  vin2: "Not uploaded",
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
  { header: "Driver", accessor: "driver", id: 1 },
  { header: "Comment", accessor: "comment", id: 2 },
  { header: "Start Date", accessor: "starD", id: 3 },
  { header: "End Date", accessor: "endD", id: 4 },
  { header: "Status", accessor: "status", id: 5 },
  { header: "Processed Time", accessor: "time", id: 6 },
  { header: "Submission ID", accessor: "submission", id: 7 },
];

export const transferData = Array(3).fill({
  driver: "Koba Gogelashvili",
  comment: "in7558",
  startD: "Thu, Feb 22, 00:00, EST",
  endD: "Thu, Feb 29, 23:59, EST",
  status: "Information",
  time: "Thu, Feb 29, 17:34, EST",
  submission: "693a6d13-dd88-4e00-a546-d6a9c8d97da9",
});

export const Main = styled.main`
  border-radius: 20px;
  padding: 0 20px 20px 20px;
  width: 100%;
  max-width: 100vw;
  height: calc(100vh - 15px);
  background: #f3f3f4;
  overflow-y: hidden;
`;

export const OutletWrapper = styled.div`
  padding: 10px;
  width: 100%;
  max-width: 100vw;
`;
const expandAnimation = keyframes`
  from {
    height: 50px;
  }
  to {
    height: 244px;
  }
`;

export const InfoCard = styled.div<{ $active?: boolean; duration?: number }>`
  flex: 0 0 517px;
  border-radius: 15px;
  ${({ $active }) =>
    !$active &&
    `
  display:flex;
  gap:40px;
  align-items:center;
  `}
  padding: ${({ $active }) => ($active ? "25px" : "15px 20px")};
  width: 517px;
  height: ${({ $active }) => ($active ? "244px" : "50px")};
  background: #fff;
  transition: height 1s ease, width 0.3s ease;
  overflow: hidden;
  ${({ $active }) =>
    $active &&
    css`
      animation: ${expandAnimation} 0.6s ease-in;
    `}
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
  { id: 2, text: "Auto Refresh off" },
  { id: 3, text: "Refresh" },
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
export const MCTabPages = [
  { label: "Company", key: "1", to: "company" },
  { label: "Users", key: "2", to: "users" },
  { label: "Api keys", key: "3", to: "keys" },
  { label: "Histories", key: "4", to: "histories" },
];
export const MCompanyPages = [
  { label: "Company", key: "1", children: "Content of Map" },
  { label: "Users", key: "2", children: "Content of Drivers" },
  { label: "Api keys", key: "3", children: "Content of Logs" },
  { label: "Histories", key: "4", children: "Content of Violation" },
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
  { header: "ID", accessor: "id", id: 1 },
  { header: "Date", accessor: "date", id: 2 },
  { header: "Truck no", accessor: "truckNo", id: 3 },
  { header: "Status", accessor: "status", id: 4 },
  { header: "Last known Location", accessor: "location", id: 5 },
  { header: "", accessor: "week", id: 6 },
  { header: "Warnings & Violation", accessor: "warnings", id: 7 },
  { header: "Break", accessor: "break", id: 8 },
  { header: "Drive", accessor: "drive", id: 9 },
  { header: "Shift", accessor: "shift", id: 10 },
  { header: "Cycle", accessor: "cycle", id: 11 },
  { header: "Recap", accessor: "recap", id: 12 },
];
export const LogsDataHeader = [
  { header: "ID", accessor: "id", id: 1 },
  { header: "Date", accessor: "date", id: 2 },
  { header: "Truck no", accessor: "truckNo", id: 3 },
  { header: "Status", accessor: "status", id: 4 },
  { header: "Last known Location", accessor: "location", id: 5 },
  { header: "", accessor: "week", id: 6 },
  { header: "Warnings & Violation", id: 7, accessor: "warnings" },
  { header: "Break", accessor: "break", id: 8 },
  { header: "Drive", accessor: "drive", id: 9 },
  { header: "Shift", accessor: "shift", id: 10 },
  { header: "Cycle", accessor: "cycle", id: 11 },
  { header: "Recap", accessor: "recap", id: 12 },
];
export const violationTabHeader = [
  { header: "Driver", accessor: "driver", id: 1 },
  { header: "Error", accessor: "error", id: 2 },
  { header: "Status", accessor: "status", id: 3 },
  { header: "Start", accessor: "start", id: 4 },
  { header: "Address", accessor: "address", id: 5 },
  { header: "Odometer", accessor: "odometer", id: 6 },
  { header: "Engine hours", accessor: "hours", id: 7 },
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
export const DriversWeek = [
  { id: 1, text: "Jan 24 / Wed" },
  { id: 2, text: "Jan 23 / Tue" },
  { id: 3, text: "Jan 24 / Wed" },
  { id: 4, text: "Jan 22 / Mon" },
  { id: 5, text: "Jan 21 / Sun" },
  { id: 6, text: "Jan 20 / Sat" },
  { id: 7, text: "Jan 19 / Fri" },
];

export const circleDiagram = [
  {
    id: 1,
    title: "Break",
    color: "#FFAF66",
    valueData: "8:00",
    value: 10,
  },
  {
    id: 2,
    title: "Drive",
    color: "#32BE61",
    valueData: "14:00",
    value: 40,
  },
  {
    id: 3,
    title: "Shift",
    color: "#6298EF",
    valueData: "20:00",
    value: 50,
  },
  {
    id: 4,
    title: "Cycle",
    color: "#5D5E5F",
    valueData: "50:00",
    value: 80,
  },
];

// MdModeEdit

export const driversTableHeader = [
  { header: <MdCheckBoxOutlineBlank />, accessor: "checkbox", id: 1 },
  { header: "ID", accessor: "id", id: 1 },
  { header: "Status", accessor: "status", id: 2 },
  { header: "Start", accessor: "start", id: 3 },
  { header: "Duration", accessor: "duration", id: 4 },

  { header: "Location", accessor: "location", id: 5 },
  { header: "Vehicle", accessor: "vehicle", id: 6 },
  { header: "Odometer", accessor: "odometer", id: 7 },
  { header: "Eng. hours", accessor: "hours", id: 8 },
  { header: "Notes", accessor: "notes", id: 9 },
  { header: "Document", accessor: "document", id: 10 },
  { header: "Trailer", accessor: "trailer", id: 11 },
  {
    header:"",
    accessor: "add",
    id: 12,
  },
  {
    header:"",
    accessor: "dots",
    id: 13,
  },
];

export const driversTableData = [
  {
    id: 1,
    checkbox: <Checkbox></Checkbox>,
    status: "OFF",
    start: "12:00:00 AM",
    duration: "12min 9sec",
    location: "82, Oak St, Chicago",
    vehicle: "1015",
    odometer: "518983",
    hours: "10109.4",
    notes: "",
    document: "N/A",
    trailer: "v502269",
    add: <MdModeEdit color="blue" size={20} style={{ cursor: "pointer" }} />,
    dots:<BsThreeDotsVertical style={{cursor:"pointer"}}/>
  },
  {
    id: 2,
    checkbox: <Checkbox></Checkbox>,
    status: "SB",
    start: "12:00:00 AM",
    duration: "12min 9sec",
    location: "82, Oak St, Chicago",
    vehicle: "1015",
    odometer: "518983",
    hours: "10109.4",
    notes: "",
    document: "N/A",
    trailer: "v502269",
    add: <MdModeEdit color="blue" size={20} style={{ cursor: "pointer" }} />,
    dots:<BsThreeDotsVertical style={{cursor:"pointer"}}/>
  },
  {
    id: 3,
    checkbox: <Checkbox></Checkbox>,
    status: "ON",
    start: "12:00:00 AM",
    duration: "12min 9sec",
    location: "82, Oak St, Chicago",
    vehicle: "1015",
    odometer: "518983",
    hours: "10109.4",
    notes: "",
    document: "N/A",
    trailer: "v502269",
    add: <MdModeEdit color="blue" size={20} style={{ cursor: "pointer" }} />,
    dots:<BsThreeDotsVertical style={{cursor:"pointer"}}/>
  },
];

export const logsForm = [
  { id: 1, title: "Driver", value: "Nematjon Mardonov" },
  { id: 2, title: "Distance", value: "391 mil" },
  { id: 3, title: "Co Driver", value: "Jonibek Murodov" },
  { id: 4, title: "Truck", value: "105" },
  { id: 5, title: "Trailers", value: "Bobtail, v378397" },
  { id: 6, title: "Shipping docs", value: "N/A 11194RY9P" },
  { id: 7, title: "Signature", value: "Signed" },
];
export const driverEditModalBtns = [
  { id: 0, text: "On" },
  { id: 1, text: "Sb" },
  { id: 2, text: "Off" },
  { id: 3, text: "Ym" },
  { id: 4, text: "Pc" },
];

export const ehfModalColums = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (title: string) => (
      <StatusBadge $status={title}> {title}</StatusBadge>
    ),
  },
  {
    title: "Start",
    dataIndex: "start",
    key: "start",
  },
  {
    title: "Duration",
    dataIndex: "duration",
    key: "duration",
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
  },
  {
    title: "Vehicle",
    dataIndex: "vehicle",
    key: "vehicle",
  },
  {
    title: "Odometr",
    dataIndex: "odometr",
    key: "odometr",
  },
  {
    title: "Eng. hours",
    dataIndex: "e_hours",
    key: "e_hours",
  },
];

export const ehfModalData = [
  {
    key: "0",
    id: "1",
    status: "DR",
    start: "3:01:58 PM",
    duration: "5h:38m:9s",
    location: "876, Maple Ave, Chicago",
    vehicle: "1015",
    odometr: "244342",
    e_hours: "10123",
  },
  {
    key: "1",
    id: "1",
    status: "SB",
    start: "3:01:58 PM",
    duration: "",
    location: "876, Maple Ave, Chicago",
    vehicle: "1015",
    odometr: "244342",
    e_hours: "10123",
  },
  {
    key: "2",
    id: "1",
    status: "Intermediate",
    start: "3:01:58 PM",
    duration: "",
    location: "876, Maple Ave, Chicago",
    vehicle: "1015",
    odometr: "244342",
    e_hours: "10123",
  },
];

export const logFormModalColums = [
  {
    title: "",
    key: "url",
    dataIndex: "url",
  },
  {
    title: "State",
    dataIndex: "state",
    key: "state",
    render: (title: string) => (
      <StatusBadge $status={title}> {title}</StatusBadge>
    ),
  },

  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Start",
    dataIndex: "start",
    key: "start",
  },
  {
    title: "Duration",
    dataIndex: "duration",
    key: "duration",
  },
  {
    title: "Result",
    dataIndex: "result",
    key: "result",
  },
];

export const logFormModalData = [
  {
    key: "0",
    url: "From",
    state: "SB",
    date: "03-12-2024",
    start: "02:59:09 AM",
    duration: "2h:30m56s",
    result: "2h:30m56s",
  },
  {
    key: "0",
    url: "To",
    state: "SB",
    date: "03-12-2024",
    start: "02:59:09 AM",
    duration: "2h:30m56s",
    result: "2h:30m56s",
  },
];
export const companyTableHeader = [
  { header: "Name", accessor: "name" },
  { header: "Status", accessor: "status" },
  { header: "Contact", accessor: "contact" },
  { header: "Created", accessor: "created" },
  { header: "", accessor: "edit" },
];

export const companyTableData = [
  {
    name: {
      label: "Sandbox Motions",
      img: "/company-logo.png",
      data: [
        { id: 1, text: "9328382389", icon: <HiPhone /> },
        { id: 2, text: "support@asritsolutions.com", icon: <IoMdMail /> },
      ],
    },
    status: { label: "Active" },
    contact: {
      label: "",
      data: [
        { id: 1, text: "Farmon Muhammadiyev (Owner)", icon: <RiUser3Fill /> },
        { id: 2, text: " (318) 818-0000", icon: <HiPhone /> },
        { id: 3, text: "zavajan96@gmail.com", icon: <IoMdMail /> },
      ],
    },
    created: {
      label: "",
      data: [
        { id: 1, text: "Created: Apr 3rd 2023", icon: "" },
        { id: 2, text: "Edited: Apr 3rd 2023", icon: "" },
      ],
    },
    edit: { label: "Edit" },
  },
];

export const usersTableHeader = [
  { header: "Name", accessor: "name" },
  { header: "Updated", accessor: "updated" },
  { header: "Status", accessor: "status" },
  { header: "Carrier", accessor: "carrier" },
  { header: "Role", accessor: "role" },
  { header: "", accessor: "edit" },
];

export const usersTableData = [
  {
    name: {
      label: "Annette Black",
      img: "/company-logo.png",
      data: [{ id: 1, text: "support@asritsolutions.com" }],
    },
    updated: { label: "3 week ago" },
    status: {
      label: "Active",
    },
    carrier: {
      label: "ASAP Transportation INC",
    },
    role: {
      label: "Driver",
    },
    edit: { label: "Edit" },
  },
];

export const editUserModalBtns = [
  { id: 1, text: "Base information" },
  { id: 2, text: "Role" },
];

export const editUserRoleModalBtns = [
  {
    id: 1,
    options: [
      {
        id: 1,
        title: "Admin",
        buttons: [{ id: 1, text: "Admin", isActive: false }],
      },
      {
        id: 2,
        title: "Driver",
        buttons: [
          { id: 1, text: "Admin", isActive: false },
          { id: 2, text: "Edit", isActive: false },
          { id: 3, text: "Add", isActive: false },
          { id: 4, text: "View", isActive: true },
        ],
      },
      {
        id: 3,
        title: "Logs",
        buttons: [
          { id: 1, text: "Admin", isActive: false },
          { id: 2, text: "Edit", isActive: false },
          { id: 3, text: "Add", isActive: false },
          { id: 4, text: "View", isActive: false },
        ],
      },
      {
        id: 4,
        title: "Accounts",
        buttons: [
          { id: 1, text: "Edit", isActive: false },
          { id: 2, text: "View", isActive: false },
        ],
      },
      {
        id: 5,
        title: "Notifications",
        buttons: [
          { id: 1, text: "Admin", isActive: false },
          { id: 2, text: "Edit", isActive: false },
          { id: 4, text: "View", isActive: false },
        ],
      },
      {
        id: 6,
        title: "Terminals",
        buttons: [
          { id: 1, text: "Admin", isActive: false },
          { id: 2, text: "Edit", isActive: false },
          { id: 3, text: "Add", isActive: false },
          { id: 4, text: "View", isActive: true },
        ],
      },
      {
        id: 7,
        title: "Drivers",
        buttons: [
          { id: 1, text: "Admin", isActive: false },
          { id: 2, text: "Edit", isActive: false },
          { id: 3, text: "Add", isActive: true },
          { id: 4, text: "View", isActive: true },
        ],
      },
      {
        id: 3,
        title: "Provider",
        buttons: [
          { id: 1, text: "Admin", isActive: false },
          { id: 2, text: "Edit", isActive: false },
          { id: 3, text: "Add", isActive: false },
          { id: 4, text: "View", isActive: false },
        ],
      },
    ],
  },
  {
    id: 2,
    options: [
      {
        id: 1,
        title: "Vehicle",
        buttons: [
          { id: 1, text: "Admin", isActive: false },
          { id: 2, text: "Edit", isActive: false },
          { id: 3, text: "Add", isActive: false },
          { id: 4, text: "View", isActive: true },
        ],
      },
      {
        id: 2,
        title: "Carrier",
        buttons: [
          { id: 1, text: "Admin", isActive: false },
          { id: 2, text: "Edit", isActive: false },
          { id: 3, text: "Add", isActive: false },
          { id: 4, text: "View", isActive: true },
        ],
      },
      {
        id: 3,
        title: "Users",
        buttons: [
          { id: 1, text: "Admin", isActive: false },
          { id: 2, text: "Edit", isActive: false },
          { id: 3, text: "Add", isActive: false },
          { id: 4, text: "View", isActive: false },
        ],
      },
      {
        id: 4,
        title: "Documents",
        buttons: [
          { id: 1, text: "Admin", isActive: false },
          { id: 2, text: "Edit", isActive: false },
          { id: 3, text: "Add", isActive: false },
          { id: 4, text: "View", isActive: false },
        ],
      },
      {
        id: 5,
        title: "Fmcsa",
        buttons: [
          { id: 3, text: "Add", isActive: false },
          { id: 4, text: "View", isActive: false },
        ],
      },
      {
        id: 6,
        title: "Locations",
        buttons: [
          { id: 3, text: "Add", isActive: false },
          { id: 4, text: "View", isActive: false },
        ],
      },
      {
        id: 7,
        title: "Liveshare",
        buttons: [
          { id: 1, text: "Admin", isActive: false },
          { id: 2, text: "Edit", isActive: false },
          { id: 3, text: "Add", isActive: false },
          { id: 4, text: "View", isActive: false },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Edit User",
    options: [
      {
        id: 1,
        title: "Duty Status (Admin)",
        buttons: [{ id: 1, text: "Admin", isActive: false }],
      },
      {
        id: 2,
        title: "Reas Sign (Admin)",
        buttons: [{ id: 1, text: "Admin", isActive: false }],
      },
      {
        id: 3,
        title: "Duty Status Pro (Admin)",
        buttons: [{ id: 1, text: "Admin", isActive: false }],
      },
      {
        id: 4,
        title: "Payment (Admin)",
        buttons: [
          { id: 1, text: "Admin", isActive: false },
          { id: 2, text: "Add", isActive: false },
        ],
      },
    ],
  },
];
export const permissionModal = [
  {
    id: 1,
    options: [
      {
        id: 1,
        title: "Vehicle",
        buttons: [
          { id: 1, text: "Edit", isActive: false },
          { id: 1, text: "Add", isActive: false },
          { id: 1, text: "View", isActive: true },
        ],
      },
      {
        id: 2,
        title: "Driv",
        buttons: [
          { id: 1, text: "Add", isActive: false },

          { id: 4, text: "View", isActive: true },
        ],
      },
      {
        id: 3,
        title: "A. EHF",
        buttons: [
          { id: 1, text: "Three", isActive: false },
          { id: 2, text: "False", isActive: false },
        ],
      },
      {
        id: 4,
        title: "A.Split",
        buttons: [
          { id: 1, text: "Three", isActive: false },
          { id: 2, text: "False", isActive: false },
        ],
      },
    ],
  },
  {
    id: 2,
    options: [
      {
        id: 1,
        title: "Carrier",
        buttons: [{ id: 4, text: "View", isActive: true }],
      },
      {
        id: 2,
        title: "Terminals",
        buttons: [{ id: 1, text: "View", isActive: true }],
      },
      {
        id: 3,
        title: "A. PTI",
        buttons: [
          { id: 1, text: "Thee", isActive: false },
          { id: 2, text: "False", isActive: false },
        ],
      },
      {
        id: 4,
        title: "A.Shift",
        buttons: [
          { id: 1, text: "Thee", isActive: false },
          { id: 2, text: "False", isActive: false },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "",
    options: [
      {
        id: 1,
        title: "Logs",
        buttons: [
          { id: 1, text: "Edit", isActive: false },
          { id: 2, text: "Add", isActive: false },
          { id: 1, text: "View", isActive: true },
        ],
      },
      {
        id: 2,
        title: "A.time",
        buttons: [
          { id: 1, text: "Thee", isActive: false },
          { id: 2, text: "False", isActive: false },
        ],
      },
      {
        id: 3,
        title: "A. Certify",
        buttons: [
          { id: 1, text: "Thee", isActive: false },
          { id: 2, text: "False", isActive: false },
        ],
      },
      {
        id: 4,
        title: "A. DFM",
        buttons: [
          { id: 1, text: "Thee", isActive: false },
          { id: 2, text: "False", isActive: false },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "",
    options: [
      {
        id: 1,
        title: "Locations",
        buttons: [{ id: 1, text: "Add", isActive: false }],
      },

      {
        id: 3,
        title: "A. Normalizer",
        buttons: [
          { id: 1, text: "Thee", isActive: false },
          { id: 2, text: "False", isActive: false },
        ],
      },
      {
        id: 4,
        title: "A. Break",
        buttons: [
          { id: 1, text: "Thee", isActive: false },
          { id: 2, text: "False", isActive: false },
        ],
      },
    ],
  },
];
export const companySettingsModal = [
  {
    id: 1,
    options: [
      {
        id: 1,
        title: "V",
        buttons: [
          { id: 1, text: "Edit Logs", isActive: false },
          { id: 1, text: "Documents", isActive: false },
          { id: 1, text: "IFTA Real", isActive: false },
          { id: 1, text: "Ai", isActive: true },
        ],
      },
    ],
  },
];

// DASHBOARD TABLE

export const dashboardTableHeader = [
  { header: "Name", accessor: "name", id: 1 },
  { header: "Violations", accessor: "violations", id: 2 },
  { header: "Date", accessor: "date", id: 3 },
  { header: "Eld connection", accessor: "eld", id: 4 },
  { header: "Cycle", accessor: "cycle", id: 5 },
  { header: "Company", accessor: "company", id: 6 },
  { header: "Updated", accessor: "updated", id: 7 },
];

export const dataSource = [
  {
    key: 1,
    name: "Donald Lee",
    violations: "Form & Signature",
    date: "May 3, 2014",
    eld: "Connected",
    cycle: "5:51",
    company: "Unity Eld Llc",
    updated: "3 minutes ago",
  },
  {
    key: 2,
    name: "Ibrahim Mohammed",
    violations: "Violation",
    date: "November 23, 2006",
    eld: "Connected",
    cycle: "1:52",
    company: "Unity Eld Llc",
    updated: "3 minutes ago",
  },
  {
    key: 3,
    name: "Đường Vy",
    violations: "Violation",
    date: "October 5, 2012",
    eld: "Not connected",
    cycle: "2:45",
    company: "Unity Eld Llc",
    updated: "3 minutes ago",
  },
  {
    key: 4,
    name: "Hugo Nagy",
    violations: "Form & Signature",
    date: "January 18, 2018",
    eld: "Connected",
    cycle: "7:45",
    company: "Unity Eld Llc",
    updated: "3 minutes ago",
  },
  {
    key: 5,
    name: "Jahari Mambwe",
    violations: "Violation",
    date: "February 27, 2022",
    eld: "Not connected",
    cycle: "1:18",
    company: "Unity Eld Llc",
    updated: "3 minutes ago",
  },
  {
    key: 6,
    name: "Ryan Lee",
    violations: "Form & Signature",
    date: "July 3, 2011",
    eld: "Connected",
    cycle: "7:01",
    company: "Unity Eld Llc",
    updated: "3 minutes ago",
  },
  {
    key: 7,
    name: "Amy Gray",
    violations: "Form & Signature",
    date: "August 13, 2013",
    eld: "Connected",
    cycle: "4:40",
    company: "Unity Eld Llc",
    updated: "3 minutes ago",
  },
  {
    key: 8,
    name: "Amy Gray",
    violations: "Form & Signature",
    date: "August 13, 2013",
    eld: "Connected",
    cycle: "4:40",
    company: "Unity Eld Llc",
    updated: "3 minutes ago",
  },
  {
    key: 9,
    name: "Amy Gray",
    violations: "Form & Signature",
    date: "August 13, 2013",
    eld: "Connected",
    cycle: "4:40",
    company: "Unity Eld Llc",
    updated: "3 minutes ago",
  },
];
