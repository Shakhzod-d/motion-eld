import { Button } from "antd";
import styled from "styled-components";
interface ButtonProps {
  $active?: boolean;
  border: string;
}
export const Day = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 2px;
  margin-bottom: 10px;
`;

export const DayBtn = styled(Button)<ButtonProps>`
  background-color: ${({ $active }) => ($active ? "#19223f" : "")};
  border-radius:${({ border }) => border}
  padding: 15px 30px;
  width: 81px;
  height: 49px;
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
  max-width: 1920px;
  margin-bottom: 40px;
  gap:10px;
  // justify-content: center;
  overflow-x: auto !important;
`;
