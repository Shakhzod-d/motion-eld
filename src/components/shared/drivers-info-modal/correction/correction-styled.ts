import { Button } from "antd";
import styled from "styled-components";

export const Head = styled.div`
  width: 100%;
  display: flex;
  margin: 35px 0;
  justify-content: space-between;
  //   border: 1px solid;
`;

export const DataBox = styled.div`
  width: 200px;
  height: 48px;
  border-radius: 5px;
  background: #f9f9fa;
  padding: 15px 20px;
  user-select: none;
`;
export const DataBtn = styled.div`
  width: 42px;
  height: 48px;
  border-radius: 5px 0 0 5px;
  background: #f9f9fa;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const CustomBtn = styled(Button)<{ $clr?: string; $bg?: string }>`
min-width:113px;
  height: 48px;
  border-radius:10px
  padding: 15px 24px;
  background: ${({ $bg = "#f3f3f4" }) => $bg};
  color: ${({ $clr = "#2d2e2f" }) => $clr};
  box-shadow: none;
  &:hover {
    background: ${({ $bg = "#f3f3f4" }) => $bg} !important;
    color:  ${({ $clr = "#2d2e2f" }) => $clr} !important;
    opacity: 0.8;
  }
`;
