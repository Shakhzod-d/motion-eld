import { Button } from "antd";
import styled from "styled-components";

export const Block = styled.div<{
  display: string;
  $gap?: number;
  content?: string;
  width?: number;
}>`
  max-width: ${({ width }) => `${width}px`} !important; /* ma-width to'g'ri yozildi */
  border-radius: 10px;
  padding: 15px 20px;
  background: #fff;
  display: ${({ display }) => display};
  align-items: center;
  height: 75px;
  gap: ${({ $gap = 0 }) => `${$gap}px`};
  justify-content: ${({ content }) => content};
`;


export const Div = styled.div<{ $w?: string }>`
  width: 100%;
  max-width: ${({ $w = "100px" }) => $w} !important;
  border: 1px solid;
`;
export const Text = styled.p<{ size?: number; $font?: number; color?: string }>`
  font-weight: ${({ $font }) => $font};
  font-size: ${({ size }) => `${size}px`};
  letter-spacing: -0.03em;
  color: ${({ color }) => color};
  display: flex;
  gap: 2px;
`;

export const StyleButton = styled(Button)<{ active: string }>`
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  max-width: 192px;
  height: 57px;
  background: ${({ active }) => (active == "true" ? "#19223f" : "")};
`;
export const BtnContainer = styled.div`
  width: 100%;
  max-width: 1900px;
  margin: 0 auto;
  margin-top: 10px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  overflow-x: auto;
`;
