import { Input } from "antd";
import styled from "styled-components";

export const StyledInput = styled(Input)<{ $width?: string; $margin?: string }>`
  border-radius: 10px;
  padding: 10px 15px;
  width: ${({ $width = "270px" }) => $width};
  height: 44px;
  background: #fdfdfd;
  outline: none;
  margin: ${({ $margin }) => $margin};
`;
