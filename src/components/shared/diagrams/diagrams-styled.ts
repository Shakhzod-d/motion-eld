import { Button } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 10px;
  width: 100%;
  padding: 20px;
  height: 433px;
  margin-top: 10px;
  background: ${({ theme }) => theme.white};
  margin-bottom: 40px;
  @media (max-width: 1620px) {
    padding: 20px 10px;
  }
`;

export const CustomButton = styled(Button)`
  border-radius: 10px;
  padding: 20px 35px;
  // width: 114px;
  height: 59px;
  background: ${({ theme }) => theme.customBtn};
  // background: #f3f3f4;
  border: none;
  color: ${({ theme }) => theme.clr};
   @media (max-width: 1755px) {
    padding: 15px 25px;
  }
  @media (max-width: 1620px) {
    padding: 10px;
  }
`;
