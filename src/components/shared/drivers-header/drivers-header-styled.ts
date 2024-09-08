import { Button } from "antd";
import styled from "styled-components";

export const Block = styled.div<{
  display: string;
  $gap?: number;
  content?: string;
  width?: number;
}>`
  border-radius: 10px;
  padding: 15px 20px;
  background: #fff;
  display: ${({ display }) => display};
  align-items: center;
  height: 75px;
  width: ${({ width }) => `${width}px`};
  gap: ${({ $gap = 0 }) => `${$gap}px`};
  justify-content: ${({ content }) => content};
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
  width: 192px;
  height: 57px;
  background: ${({ active }) => (active =="true" ? "#19223f" : "")};
`;
export const BtnContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 10px;
  display: flex;
  gap: 10px;
  align-items: center;
  overflow-x: auto;
`;
