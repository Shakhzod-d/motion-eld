import styled from "styled-components";

export const Wrapper = styled.div<{ $bg?: string }>`
  width: 100%;
  height: 100vh;
  background: ${({ $bg = "#fff" }) => $bg};
  display: flex;
  justify-content: center;
  align-items: center;
`;
