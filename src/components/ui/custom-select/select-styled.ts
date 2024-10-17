import { Select } from "antd";
import styled from "styled-components";
interface Props {
  width?: string;
  height?: number;
  color?: string;
}
export const StyledSelect = styled(Select)<Props>`
  width: ${({ width = "268px" }) => width};
  height: ${({ height = 47 }) => `${height}px`};
  border-radius: 10px;
  background: ${(props) => props.theme.white} !important;

  .ant-select-arrow {
    * {
      display: flex !important;
      jusctify-content: center !important;
      align-items: center !important;
      width: 15px !important;
      height: 12px !important;
      overflow: hidden !important;
      fill: ${({theme})=>theme.clr} !important;
      background: ${(props) => props.theme.white} !important;
    }
  }
  & {
    padding: 25px 10px;
  }
  * {
    border: none !important;
    background: ${(props) => props.theme.white} !important;
  }
  span {
    color: ${({ color = (props) => props.theme.clr }) => color};
    font-size: 16px !important;
    font-weight: 500;
  }

  .ant-select-arrow {
    color: ${({ theme }) => theme.clr} !important;
    font-size: 15px;
    height: 10px;
  }
  &::placeholder {
    color: ${({ theme }) => theme.clr} !important;
  }
`;
