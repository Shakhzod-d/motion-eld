import styled from "styled-components";

export const TableContainer = styled.div`
  margin-top: 20px;
  border-radius: 8px;
  // height: 100px;
  // overflow-y: auto;
  // border: 1px solid red;
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
  // border: 1px solid red;
  border-radius: 10px;
  padding: 25px;
  background: #fdfdfd;
  position: relative;
  height: 77px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const HoverContainer = styled.div``;
export const TableData = styled.td<{ color: string | number }>`
  padding: 10px;
  // background: #ddd;
  border-bottom: 6px solid #f3f3f4;
  text-align: left;
  color: ${({ color }) => color};
  position: relative;
  cursor: pointer;
  &:first-child {
  }
`;

// Borders
export const BorderLBottom = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 8px;
  height: 10px;
  background: #f3f3f4;

  &:before {
    content: "";
    position: absolute;
    left: -1px;

    bottom: 0;
    width: 10px;
    height: 10px;
    background: #fdfdfd;

    border-bottom-left-radius: 50px;

    z-index: 10;
  }
`;
export const BorderLTop = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 8px;
  height: 10px;
  background: #f3f3f4;
  // #f3f3f4;
  &:before {
    content: "";
    position: absolute;
    left: -1px;
    bottom: 0;
    width: 10px;
    height: 10px;
    background: #fdfdfd;

    border-top-left-radius: 50px;
    // border-bottom-right-radius: 10px;
    z-index: 10;
  }
`;
export const BorderRTop = styled.span`
  position: absolute;
  right: 0px;
  top: 0;
  width: 8px;
  height: 10px;
  background: #f3f3f4;

  &:before {
    content: "";
    position: absolute;
    left: -1px;
    bottom: 0;
    width: 10px;
    height: 10px;
    background: #fdfdfd;
    border-top-right-radius: 50px;
    z-index: 10;
  }
`;
export const BorderRBottom = styled.span`
  position: absolute;
  right: 0px;
  bottom: 0;
  width: 8px;
  height: 10px;
  background: #f3f3f4;
  // #f3f3f4;
  &:before {
    content: "";
    position: absolute;
    left: -1px;
    bottom: 0;
    width: 10px;
    height: 10px;
    background: #fdfdfd;
    border-bottom-right-radius: 50px;
    z-index: 10;
  }
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
