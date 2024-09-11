import { Flex } from "antd";
import styled from "styled-components";

export const FormRow = styled(Flex)`
  border-radius: 10px;
  margin-bottom: 5px;
  padding: 15px 25px;
  width: 535px;

  background: #fdfdfd;
`;

export const FormTitle = styled.div`
  width: 300px;
`;
export const ValueBox = styled.span`
  border-radius: 10px;
  padding: 10px 15px;
  //   width: 146px;
  height: 39px;
  background: #dbdbdb;
`;

export const StyleFlex = styled(Flex)<{ $active: boolean }>`
  width: 100%;
  max-width: calc(100vw - ${({ $active }) => ($active ? "295px" : "100px")});
  overflow-x: auto;
`;
