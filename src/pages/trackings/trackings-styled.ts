import styled from "styled-components";
export const Wrapper = styled.main`
  width: 100%;
  display: flex;
  gap: 10px;
`;

export const Map = styled.div<{ $active: boolean }>`
  width: 100%;
  max-width: ${({ $active }) =>
    $active ? "calc( 100vw - 850px )" : "calc( 100vw - 200px )"};
  border: 3px solid #fff;
  border-radius: 10px;
  padding: 10px;
  height: calc(100vh - 270px);
`;
