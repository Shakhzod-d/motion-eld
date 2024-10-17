import { Input } from "antd";
import styled from "styled-components";

export const StyledInput = styled(Input)<{ $width?: string; $margin?: string }>`
  border-radius: 10px;
  padding: 10px 15px;
  width: ${({ $width = "270px" }) => $width};
  height: 44px;
  background: ${({ theme }) => theme.white}; /* Oq rang oddiy holatda */
  outline: none;
  margin: ${({ $margin }) => $margin};

  &:hover {
    background: ${({ theme }) => theme.white}; /* Custom hover rang */
  }

  &:focus {
    background: ${({ theme }) => theme.white}; /* Custom focus rang */
  }

  &:active {
    background: ${({ theme }) => theme.white}; /* Custom active rang */
  }
`;
