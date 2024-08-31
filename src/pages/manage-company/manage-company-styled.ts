import { Input } from "antd";
import styled from "styled-components";

export const Label = styled.label`
  color: #8c8c9b;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const StyledInput = styled(Input)`
  padding: 20px 25px;
  color: #000;
  font-size: 16px;
  font-weight: 500;
  border: none;
  max-width: 380px;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  max-width: 380px;
  width: 100%;
  * {
    width: 100%;
  }
`;
