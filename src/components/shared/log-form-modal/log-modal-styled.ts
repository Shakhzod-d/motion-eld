import { Table } from "antd";
import styled from "styled-components";

export const Title = styled.h2<{ size?: string }>`
  color: ${({theme})=>theme.clr};
  font-size: ${({ size }) => size || "36px"};
  font-weight: 600;
  letter-spacing: -0.5px;
`;

export const Description = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.5px;
`;

export const Warning = styled.p`
  color: #fc973a;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.5px;
  margin-bottom: 20px;
`;

export const StyledTable = styled(Table)`
  margin-bottom: 35px;
  .ant-table-thead {
    * {
      background: transparent !important;
      border: none !important;
    }
  }
`;
