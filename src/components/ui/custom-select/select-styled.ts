import { Select } from "antd";
import styled from "styled-components";
interface Props {
  width?: string;
  height?: number;
}
export const StyledSelect = styled(Select)<Props>`
  width: ${({ width = "300px" }) => width};
  height: ${({ height = 47 }) => `${height}px`};
  border-radius: 10px;
  background: #f9f9fa !important;

  & {
    padding: 25px 10px;
  }
  * {
    border: none !important;
    background: #f9f9fa !important;
  }
  span {
    color: #5d5e5f;
    font-size: 16px !important;
    font-weight: 500;
  }

  .ant-select-arrow {
    color: #5d5e5f !important;
    font-size: 15px;
    height: 10px;
  }
`;
