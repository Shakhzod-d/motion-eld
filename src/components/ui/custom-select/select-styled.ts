import { Select } from "antd";
import styled from "styled-components";
interface Props {
    width?:number,
    height?:number
}
export const StyledSelect = styled(Select)<Props>`
  width: ${({width =300})=> `${width}px`};
  height: ${({height =47})=> `${height}px`};
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