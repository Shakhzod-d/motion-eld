import styled from "styled-components";

export const Block = styled.div<{
  display: string;
  gap?: string;
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
  gap: ${({ gap }) => gap};
  justify-content: ${({ content }) => content};
`;
export const Text = styled.p<{ size?: number; $font?: string; color?: string }>`
  font-weight: ${({ $font }) => $font};
  font-size: ${({ size }) => `${size}px`};
  letter-spacing: -0.03em;
  color: ${({ color }) => color};
  display: flex;
  gap: 2px;
`;

export const Wrapper =styled.div`
  height: 840px;
  overflow: auto;
`