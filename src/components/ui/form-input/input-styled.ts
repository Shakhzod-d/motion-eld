import { Form, Input } from "antd";
import styled from "styled-components";

export const Item = styled(Form.Item)`
  width: 100%;
`;

export const StyledInput = styled(Input)<{
  $w?: string;
  $p?: string;
  $clr?: string;
  $pClr?: string;
  $bg?: string;
}>`
  border-radius: 10px;
  padding: ${({ $p = "20px" }) => $p};
  width: ${({ $w = "100%" }) => $w};
  color: ${({ $clr = "#000" }) => $clr} !important;
  background: ${({ $bg = "#f9f9fa" }) => $bg};
  border: none;
  &:hover {
    background: ${({ $bg = "#f9f9fa" }) => $bg} !important;
  }
  &:focus {
    background: ${({ $bg = "#f9f9fa" }) => $bg} !important;
  }
  &::placeholder {
    color: ${({ $pClr = "#000" }) => $pClr} !important;
  }
`;
