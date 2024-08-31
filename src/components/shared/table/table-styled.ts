import { Select } from "antd";
import styled from "styled-components";

export const TableWrapper = styled.table`
  width: 100%;

  thead tr,
  tbody tr {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
    gap: 10px;
    // grid-auto-columns: 1fr;
    justify-content: space-around;
    align-items: center;
  }
  * {
    text-align: start;
  }

  thead {
    tr {
      margin-bottom: 10px;
      padding: 25px 25px 0px 25px;
    }
  }

  tbody {
    tr {
      padding: 25px;
      border-radius: 10px;
      background: #fdfdfd;
      margin-bottom: 5px;
      .active {
        span {
          border-radius: 5px;
          background: #32be61;
          color: #fff;
          padding: 5px 10px;
          display: inline !important;
          width: auto;
          align-self: start;
        }
      }
      td {
        display: flex;
        align-items: center;
        gap: 10px;
        * {
          display: inline-block !important;
        }
      }
    }
  }
`;

export const TableSelect = styled(Select)`
  width: 100%;
  * {
    background: transparent !important;
    border: none !important;
    width: 100% !important;
    padding: 0 !important ;
  }
  .ant-select-dropdown {
    width: 150px !important;
  }
`;
