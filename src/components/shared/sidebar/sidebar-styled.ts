import { NavLink } from "react-router-dom";
import styled from "styled-components";
export const SidebarContainer = styled.article`
  width: 100%;
  max-width: 300px;
  height: 100vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const Img = styled.img`
  width: 100%;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  color: #fff;
  font-size: 16px;
  font-weight: 300;
  margin: 10px 0;
`;
export const PageBtn = styled(NavLink)`
  border-radius: 10px;
  padding: 25px 20px;
  width: 100%;
  height: 70px;
  background: rgba(255, 255, 255, 0.1);
  margin-bottom: 10px;
  display: flex;
  gap: 10px;
  align-items: center;
  color: #fff;
  p {
    font-weight: 500;
    font-size: 17px;
  }
  &.active {
    background-color: #fff;
    color: #000;
  }
`;
export const TabBtn = styled.div`
  border-radius: 10px;
  width: 280px;
  min-height: 70px;
  background: rgba(255, 255, 255, 0.1);
  margin-bottom: 10px;
  color: #fff;
  overflow: hidden;
  * {
    cursor: pointer;
  }
`;
export const BtnWrap = styled.div`
  padding: 25px 20px 10px 20px;
  display: flex;
  gap: 10px;
  align-items: center;
`;
export const PageActive = styled(NavLink)`
  display: block;
  padding: 15px 20px;
  color: white;
  width: 100%;
  height: 49px;
  transition: all 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  &.active {
    background: rgba(255, 255, 255, 0.1);
  }
`;
export const User = styled.div<{ background?: string; color?: string }>`
  display: flex;
  padding: 25px 20px;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: ${({ background }) =>
    background ? background : "rgba(255, 255, 255, 0.15)"};

  img {
    width: 42px;
    height: 42px;
    margin: 0 !important;
    border-radius: 50%;
  }

  h2 {
    color: ${({ color }) => (color ? color : "#fff")};
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 5px;
  }

  p {
    margin: 0 !important;
    color: ${({ color }) => (color ? color : "#fff")};
    font-size: 12px;
    font-weight: 400;
    opacity: 0.7;
  }
`;
