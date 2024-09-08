import { Table } from "antd";
import styled from "styled-components";

const StyledTable = styled(Table)`
  .ant-table {
    border-radius: 10px;

    margin-bottom: 10px;
    background-color: #f3f3f4;
  }
  .ant-table {
  }
  .ant-table-thead > tr > th {
    background-color: #f5f5f5;
    color: #000;

    font-weight: bold;
    // text-align: center;
  }

  .ant-table-tbody > tr > td {
    padding: 29px 25px;
  width: 1575px;
    // height: 77px;
    background: #fdfdfd;
    // text-align: center;
  }
  .ant-table-tbody > tr {
    background: #fff;
    border-radius: 10px;
    padding: 29px 25px;
    width: 1575px;
    height: 77px;
    margin-bottom: 10px;
    
  }
  .ant-table-tbody > tr > td:nth-child(2) {
    color: #ff4d4f;
  }

  .ant-table-tbody > tr > td:nth-child(4) {
    color: #52c41a;
  }
`;
const columns = [
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Violations", dataIndex: "violations", key: "violations" },
  { title: "Date", dataIndex: "date", key: "date" },
  { title: "Eld connection", dataIndex: "eld", key: "eld" },
  { title: "Cycle", dataIndex: "cycle", key: "cycle" },
  { title: "Company", dataIndex: "company", key: "company" },
];
const dataSource = [
  {
    key: "1",
    name: "Donald Lee",
    violations: "Form & Signature",
    date: "May 3, 2014",
    eld: "Connected",
    cycle: "5:51",
    company: "Unity Eld Llc",
  },
  {
    key: "2",
    name: "Ibrahim Mohammed",
    violations: "Violation",
    date: "November 23, 2006",
    eld: "Connected",
    cycle: "1:52",
    company: "Unity Eld Llc",
  },
  {
    key: "3",
    name: "Đường Vy",
    violations: "Violation",
    date: "October 5, 2012",
    eld: "Not connected",
    cycle: "2:45",
    company: "Unity Eld Llc",
  },
  {
    key: "4",
    name: "Hugo Nagy",
    violations: "Form & Signature",
    date: "January 18, 2018",
    eld: "Connected",
    cycle: "7:45",
    company: "Unity Eld Llc",
  },
  {
    key: "5",
    name: "Jahari Mambwe",
    violations: "Violation",
    date: "February 27, 2022",
    eld: "Not connected",
    cycle: "1:18",
    company: "Unity Eld Llc",
  },
  {
    key: "6",
    name: "Ryan Lee",
    violations: "Form & Signature",
    date: "July 3, 2011",
    eld: "Connected",
    cycle: "7:01",
    company: "Unity Eld Llc",
  },
  {
    key: "7",
    name: "Amy Gray",
    violations: "Form & Signature",
    date: "August 13, 2013",
    eld: "Connected",
    cycle: "4:40",
    company: "Unity Eld Llc",
  },
];
export const DriversInfoTable = () => {
  return (
    <div style={{overflowX:"auto", height:"400px"}}>
      <StyledTable
        dataSource={dataSource}
        columns={columns}
        pagination={false}
      />
    </div>
  );
};
