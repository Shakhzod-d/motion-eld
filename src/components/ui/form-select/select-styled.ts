import { Form, Select } from "antd";
import styled, { createGlobalStyle } from "styled-components";

export const Item = styled(Form.Item)`
  width: 100%;
`;

export const StyledSelect = styled(Select)<{
  $w?: string;
  $h?: string;
  $clr?: string;
  $pClr?: string;
  $bg?: string;
}>`
  border-radius: 10px;
  width: ${({ $w = "100%" }) => $w} !important;
  height: ${({ $h = "60px" }) => $h} !important;
  background: ${({ $bg = "#f9f9f9" }) => $bg} !important;
  border: none !important;
  box-shadow: none !important;

  .ant-select-selector {
    background-color: ${({ $bg = "#f9f9fa" }) => $bg} !important;
    border: none !important;
    color: ${({ theme }) => theme.clr} !important;
  }

  .ant-select-selection-placeholder {
    color: ${({ $pClr = "#000" }) => $pClr} !important;
  }

  .ant-select-dropdown {
    background-color: red !important; 
  }

  &.ant-select-status-error {
    border: 1px solid red !important; 
  }

  &:hover {
    background: ${({ $bg = "#f9f9fa" }) => $bg} !important;
    border: none !important;
    box-shadow: none !important;
  }

  &:focus {
    background: ${({ $bg = "#f9f9fa" }) => $bg} !important;
    border: none !important;
    box-shadow: none !important;
  }

  .ant-select-arrow {
    svg {
      color: ${({ theme }) => theme.clr}  !important;
      fill:${({ theme }) => theme.clr}  !important;
    }
  }
`;

export const GlobalStyle = createGlobalStyle`
  .ant-select-dropdown {
    background-color:  ${({ theme }) => theme.selectGray} !important;
  }

  .ant-select-item-option {
    color: ${({ theme }) => theme.clr} !important; 
  }

  
  .ant-select-selection-placeholder {
    color: ${({ theme }) => theme.clr} !important;
  }
`;
