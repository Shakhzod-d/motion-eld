import { Form, Select } from "antd";
import styled from "styled-components";

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
  height: ${({ $h = "50px" }) => $h} !important;
  color: ${({ $clr = "#000" }) => $clr} !important;
  background: ${({ $bg}) => $bg} !important;
  border: none !important; /* Borderni to'liq olib tashlash */
  box-shadow: none !important; /* Box-shadowni olib tashlash */
  .ant-select-selector {
    background-color: ${({ $bg = "#f9f9fa" }) => $bg} !important;
    // border: none !important;
  }
  &:hover {
    background: ${({ $bg = "#f9f9fa" }) => $bg} !important;
    border: none !important;
    box-shadow: none !important; /* Hoverda ham shadow bo'lmasligi uchun */
  }

  &:focus {
    background: ${({ $bg = "#f9f9fa" }) => $bg} !important;
    border: none !important;
    box-shadow: none !important; /* Fokusta ham shadow bo'lmasligi uchun */
  }

  &::placeholder {
    color: ${({ $pClr = "#000" }) => $pClr} !important;
  }
`;
