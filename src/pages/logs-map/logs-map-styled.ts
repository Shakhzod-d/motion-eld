import styled from "styled-components";
export const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 10px;
  overflow-x: ;
`;

export const Map = styled.div<{ $active: boolean }>`
  width: 100%;
  max-width: ${({ $active }) =>
    $active ? "calc( 100vw - 700px )" : "calc( 100vw - 500px )"};
  border: 3px solid #fff;
  border-radius: 10px;
  height:calc( 100vh - 270px );
  padding: 10px;
`;
