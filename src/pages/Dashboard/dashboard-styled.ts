import { Button, Radio } from "antd";

import styled from "styled-components";

export const Day = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 10px;
  margin-bottom: 10px;

`;

export const CustomBtn = styled(Button)`
  border-radius: 10px;
  padding: 1px 20px;
  height: 50px;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 10px;
  border: none;
  font-weight: 700;
  div {
    height: 13px;
  }
  svg {
    width: 14px;
  }
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
  width: 100vw !important;
  max-width: ${({ $width }) =>
    $width ? "calc( 100vw - 300px )" : "calc( 100vw - 150px )"};
  margin-bottom: 40px;

  overflow: auto;
  align-items: end;
  ${({ $width }) => (!$width ? "justify-content:space-between" : "")};
  gap: 10px;
  padding-bottom: 15px;
  &::-webkit-scrollbar {
    width: 10px !important;
    height: 10px !important;
    background: #ebe8e8;
  }

  &::-webkit-scrollbar-thumb {
    background: #d6d3d3;
  }
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

  * {
    border-bottom: none !important;
    background: transparent !important;
    position: relative !important;
  }
  thead {
    * {
      color: #5d5e5f !important;
      font-size: 14px !important;
    }
  }
  tbody {
    gap: 10px !important;
    flex-wrap: wrap !important;
    tr {
      border-radius: 10px !important;
      overflow: hidden !important;
      border-bottom: 5px solid #f3f3f4 !important;
      position: relative !important;

      * {
        position: relative !important;
        z-index: 10 !important;
      }

      &:after {
        content: "";
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        width: 100% !important;
        height: 100% !important;
        background: #fff !important;
        border-radius: 10px !important;
        z-index: 1 !important;
      }
    }
  }
`;
export const ArrowIcon = styled.div<{ $active: boolean }>`
  ${({ $active }) => $active && `transform: rotate(180deg)`};
`;
