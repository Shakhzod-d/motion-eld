import styled from "styled-components";

export const TableContainer = styled.div`
export   margin-top: 20px;
  border-radius: 8px;
  // height: 750px;
  // overflow: auto;
`;

export const TableElement = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
`;

export const TableRow = styled.tr`
  border-radius: 10px;
  padding: 25px;
  background: #fdfdfd;
  height: 77px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const TableData = styled.td<{ color: string | number }>`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  text-align: left;
  color: ${({ color }) => color};
  position: relative;
`;

export const StatusBadge = styled.span<{
  $status: string | number | JSX.Element;
}>`
  padding: 5px 10px;
  border-radius: 5px;
  color: ${({ $status }) =>
    $status == "Intermediate" || $status == "Power Off" || $status == "Power On"
      ? "#8C8C9B"
      : "#fff"};
  background-color: ${({ $status }) =>
    $status === "DR" || $status === "ON"
      ? "#28a745"
      : $status === "SB"
      ? "#ffc107"
      : $status == "" ||
        $status == "Intermediate" ||
        $status == "Power Off" ||
        $status == "Power On"
      ? "#fff"
      : "#6c757d"};
`;
