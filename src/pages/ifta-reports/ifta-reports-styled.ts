import { Button, Select } from "antd";
import styled from "styled-components";

// interface ButtonProps {
//   active?: boolean;
// }

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

export const TransparentButton = styled(Button)<{
  active?: string;
  height?: string;
  width?: string;
  padding?: string;
  display?: string;
  border?: string;
}>`
  padding: ${({ padding }) => (padding ? padding : "15px 35px")};
  border-radius: ${({ border }) => border || "10px"};
  background-color: ${({ active }) => (active == "true" ? "#19223F" : "#fff")};
  color: ${({ active }) => (active == "true" ? "#fff" : "#000")};
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.5px;
  width: ${({ width }) => (width ? width : "163px")};
  height: ${({ height }) => (height ? height : "50px")};
  border: none;
  display: ${({ display }) => display || "flex"};

  &:hover {
    background-color: ${({ active }) =>
      active == "true" ? "#19223F" : "#fff"}!important;
  }
`;

export const BorderedBtn = styled(Button)<{ height?: string; width?: string }>`
  border-radius: 10px;
  border: 1px solid #d3d3df;
  background: #f9f9fa;
  padding: 25px 20px;
  height: ${({ height }) => (height ? height : "50px")};
  width: ${({ width }) => (width ? width : "390px")};
  color: #000;
  font-size: 16px;
  font-weight: 500;
`;
