import { Button } from "antd";
import styled from "styled-components";

export const Main = styled.main`
  border-radius: 20px;
  padding: 20px;
  width: 100%;
  max-width: 1615px;
  height: 100vh;
  background: #f3f3f4;
  overflow: "hidden";
`;

export const Day = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 2px;
  margin-bottom: 10px;
`;

export const DayBtn = styled(Button)`
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
