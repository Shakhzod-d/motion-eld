import { Button, Checkbox, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import styled from "styled-components";

export const TopContainer = styled.div<{ $gap?: string }>`
  display: flex;
  justify-content: end;
  margin: 20px;
  gap: ${({ $gap }) => ($gap ? $gap : "0")};
`;

export const PrimaryBtn = styled(Button)<{
  padding?: string;
  width?: string;
  height?: string;
  $background?: string;
}>`
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.5px;

  padding: ${({ padding }) => padding || "20px 35px"};
  width: ${({ width }) => width || ""};
  height: ${({ height }) => height || "100%"};
  background: ${({ $background }) => $background || "#fc973a"};
`;

export const DefaultBtn = styled(Button)<{
  padding?: string;
  width?: string;
  height?: string;
  $background?: string;
}>`
  border-radius: 10px;
  background: #fff;
  color: #000;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.5px;
  height: 100%;
  padding: ${({ padding }) => padding || ""};
  width: ${({ width }) => width || ""};
  height: ${({ height }) => height || ""};
  background: ${({ $background }) => $background || ""};
`;

export const ActiveBtn = styled(Button)`
  border-radius: 10px;
  background: #19223f;
  color: #fff;
  font-size: 16px;
  height: 100%;
  font-weight: 500;
`;

export const ModalInput = styled(Input)<{ width?: string }>`
  padding: 20px 25px;
  color: #000;
  font-size: 16px;
  font-weight: 500;
  border-radius: 10px;
  background: #f9f9fa;
  width: ${({ width }) => width || "50%"};
  border: none !important;
  &::placeholder {
    color: #000;
  }
`;

export const ModalSelect = styled(Select)`
  width: 50%;
  height: 70px;
  border-radius: 10px;
  background: #f9f9fa !important;

  & {
    padding: 25px 10px;
  }
  * {
    border: none !important;
    background: #f9f9fa !important;
  }
  span {
    color: #000;
    font-size: 16px !important;
    font-weight: 500;
  }

  .ant-select-arrow {
    color: #8c8c9b !important;
    font-size: 15px;
    height: 18px;
  }
`;

export const ModalTextArea = styled(TextArea)`
  color: #000;
  font-size: 16px;
  font-weight: 500;
  border-radius: 10px;
  background: #f9f9fa;
  padding: 20px 25px;
  border: none;
  margin: 10px 0;
  &::placeholder {
    color: #000;
  }
`;

export const ModalCheckBox = styled(Checkbox)`
  color: #000;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const ModalTitle = styled.h2`
  color: #000;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.5px;
  margin-bottom: 30px;
`;
