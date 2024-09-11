import { Button, Flex, Input } from "antd";
import styled from "styled-components";

export const Card = styled.div<{ height?: number }>`
  border-radius: 10px;
  padding: 20px 45px;
  width: 179px;
  height: ${({ height = 64 }) => height + "px"};
  background: #f3f3f4;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CustomFlex = styled(Flex)`
  margin-bottom: 15px;
`;
export const CustomInput = styled(Input)`
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  height: 59px !important;
  background: #f3f3f4;
  font-size: 16px;
  border: none;
  &:hover {
    background: #f3f3f4 !important;
  }
`;

export const BlueBtn = styled(Button)`
  border-radius: 10px;
  padding: 20px 25px;
  // width: 128px;
  height: 59px;
  background: #3da8d5;
  color: #fff;
`;
export const CustomBtn = styled(Button)<{ bg?: string; color?: string }>`
  border-radius: 10px;
  padding: 20px 40px;
  width: 150px;
  height: 59px;
  min-width: 150px;
  background: ${({ bg = "#fc973a" }) => bg};
  color: ${({ color = "#fff" }) => color};
`;
