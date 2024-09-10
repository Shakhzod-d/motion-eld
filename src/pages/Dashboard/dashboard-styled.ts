import { Button, Radio } from "antd";
import styled from "styled-components";

export const Day = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 2px;
  margin-bottom: 10px;
`;

export const CustomBtn = styled(Button)`
  border-radius: 10px;
  padding: 10px 20px;
  height: 50px;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 32px;
  letter-spacing: -0.02em;
  color: #000;
  margin-bottom: 20px;
`;

export const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1540px;
  margin-bottom: 40px;
  overflow-x: scroll !important;
  align-items: end;
  gap: 10px;
`;
export const CustomRadio = styled(Radio)``;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`;

export const TableWrapper = styled.div`
  height: calc(100vh - 505px);
  overflow-x: auto;
`;
export const ArrowIcon = styled.div<{ $active: boolean }>`
  ${({ $active }) => $active && `transform: rotate(180deg)`};
`;
