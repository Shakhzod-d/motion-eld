import { Select } from "antd";
import styled from "styled-components";

export const Container = styled.div<{ $flex?: boolean }>`
  width: 100%;
  overflow: auto;
  max-height: 80vh;
  position: relative;
  .top {
    & > span {
      padding-top: 10px !important;
      padding-bottom: 10px !important;
      padding-left: 15px !important;
      padding-right: 15px !important;
      border-radius: 10px;
      background: #fdfdfd;
    }

    input {
    }

    button {
      background: #fc973a;
      border-radius: 50%;
      width: 50px;
      height: 43px;
      svg {
        width: 22px;
        height: 22px;
      }
    }
  }

  .cards-top {
    & > p {
      max-width: 355px;
      width: 100%;
    }

    & > p > div {
      div {
        display: flex;
        align-items: center;
        padding-left: 0 !important;
        width: 70px;
        border: none !important;
        background: transparent !important;
      }
    }
  }
`;

export const Top = styled.div`
  display: flex;
  gap: 15px;
  max-width: 310px;
  margin-left: auto;
  align-items: center;
`;

export const CardsTop = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  padding: 20px 24px;
  color: #303030;
  font-size: 14px;
  font-weight: 600;
`;

export const StyledSelect = styled(Select)`
  * {
    width: 150px !important;
    min-width: max-content !important;
    background: transparent !important;
    border: none !important;
  }
  .ant-select-dropdown {
    width: 250px !important;
  }
`;
