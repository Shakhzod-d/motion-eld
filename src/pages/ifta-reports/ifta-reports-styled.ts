import { Button, Select } from "antd";
import styled from "styled-components";

export const ReportsSelect = styled(Select)`
  width: 185px;
  height: 50px;
  border-radius: 10px;
  background: #f9f9fa !important;

  & {
    padding: 10px 25px;
  }
  * {
    border: none !important;
    background: #f9f9fa !important;
  }
  span {
    color: #000;
    font-size: 16px !important;
    font-weight: 500;
  }

  .ant-select-arrow {
    color: #8c8c9b !important;
    font-size: 15px;
    height: 18px;
  }
`;

export const TransparentButton = styled(Button)`
  padding: 15px 35px;
  border-radius: 10px;
  background: #fff;
  color: #000;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.5px;
  width: 163px;
  height: 50px;
  border: none;
`;
