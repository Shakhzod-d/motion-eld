import styled from "styled-components";

export const MapWrapper = styled.div<{ $active: boolean }>`
  width: 100%;
  max-width: ${({ $active }) =>
    $active ? "calc( 100vw - 650px )" : "calc( 100vw - 200px )"};
  border: 3px solid #fff;
  border-radius: 10px;
  height: calc(100vh - 280px);
  padding: 10px;
`;
