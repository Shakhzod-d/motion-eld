import styled from "styled-components";

export const MapWrapper = styled.div<{ $active: boolean }>`
  width: 100%;
  max-width: ${({ $active }) =>
    $active ? "calc( 100vw - 650px )" : "calc( 100vw - 200px )"};
  border: 3px solid #fff;
  border-radius: 10px;
  height: calc(100vh - 175px);
  // padding: 10px;
`;
export const Maps = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
