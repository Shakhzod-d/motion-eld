import { DatePicker } from "antd";
import styled from "styled-components";

export const Name = styled.h2`
  color: #2d2e2f;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.5px;
`;

export const Phone = styled.p`
  color: #babac1;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.5px;

  span {
    color: #6298ef;
  }
`;

export const Status = styled.div<{ background: string }>`
  padding: 8px 15px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -1px;
  border-radius: 5px;
  background: ${({ background }) => background};
`;

export const P = styled.p`
  color: #babac1;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.5px;
`;

export const H2 = styled.h2<{ color?: string }>`
  color: ${({ color }) => color || "#2d2e2f"};
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.5px;
`;

export const StyledDatePicker = styled(DatePicker)`
  padding: 10px 20px;

  * {
    border: none !important;
  }
`;
