import { Button, Checkbox, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import styled from "styled-components";

export const TopContainer = styled.div`
  display: flex;
  justify-content: end;
  margin: 20px;
`;

export const PrimaryBtn = styled(Button)`
  border-radius: 10px;
  background: #fc973a;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.5px;
  height: 100%;
`;

export const DefaultBtn = styled(Button)`
  border-radius: 10px;
  background: #fff;
  color: #000;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.5px;
  height: 100%;
`;

export const ActiveBtn = styled(Button)`
  border-radius: 10px;
  background: #19223f;
  color: #fff;
  font-size: 16px;
  height: 100%;
  font-weight: 500;
`;

export const ModalInput = styled(Input)`
  padding: 20px 25px;
  color: #000;
  font-size: 16px;
  font-weight: 500;
  border-radius: 10px;
  background: #f9f9fa;
  width: 50%;
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
