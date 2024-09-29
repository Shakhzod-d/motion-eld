import { Button } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 10px;
  width: 100%;
  padding: 20px;
  height: 433px;
  margin-top: 10px;
  background: #fff;
  margin-bottom: 40px;
`;

export const CustomButton = styled(Button)`
  border-radius: 10px;
  padding: 20px 35px;
  // width: 114px;
  height: 59px;
  background: #f3f3f4;
`;

export const CustomContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`

export const StyledImage = styled.img`
  postion: absolute;
  width: 100%;
  height: auto;
  z-index: 1
`;

export const ChartWrapper = styled.div`
  position: absolute;
  top: 58.1%;
  left: 50.6%;
  transform: translate(-50%, -50%);
  width: 100%;
  border-radius: 8px;
  text-align: center;
  z-index: 2
`;
