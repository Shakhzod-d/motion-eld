import { Checkbox } from "antd";
import styled from "styled-components";

export const Box = styled.div`
  border-radius: 10px;
  padding: 25px 20px;
  width: 1150px;
  height: 69px;
  background: #f9f9fa;
  margin-bottom: 20px;
`;

export const StyledCheckbox = styled(Checkbox)`
  &.ant-checkbox-checked {
  
    .ant-checkbox-inner {
      background-color: red !important; // Yoki istalgan rangni tanlang
      border-color: red !important; // Yoki istalgan rangni tanlang
    }
  }
`;
