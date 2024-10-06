import { Checkbox } from "antd";
import TextArea from "antd/es/input/TextArea";
import styled from "styled-components";

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