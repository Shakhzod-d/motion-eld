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

export const CardWrapper = styled.div<{ $width: boolean }>`
  display: flex;
  width: 100%;
  max-width: ${({ $width }) =>
    $width ? "calc( 100vw - 370px )" : "calc( 100vw - 150px )"};
  margin-bottom: 40px;
  overflow-x: scroll !important;
  align-items: end;
  ${({ $width }) => (!$width ? "justify-content:space-between" : "")};
  gap: 10px;
`;
export const CustomRadio = styled(Radio)`
  &.ant-radio-wrapper-checked .ant-radio-inner {
    background-color: #fc973a;
    border-color: #fc973a;
  }

  & .ant-radio-inner::after {
    background-color: #fc973a;
  }

  & .ant-radio-inner {
    width: 16px;
    height: 16px;
  }

  & .ant-radio-checked .ant-radio-inner {
    background-color: #fc973a;
    border: 2px solid #fff;
  }
`;

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
