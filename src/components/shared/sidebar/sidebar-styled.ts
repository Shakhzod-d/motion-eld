import { NavLink } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
const expandAnimation = keyframes`
  from {
    width: 100px;
  }
  to {
    width: 300px;
  }
`;
export const SidebarContainer = styled.article<{ $active: boolean }>`
  width: 100%;
  max-width: 300px;
  max-width: ${({ $active }) => ($active ? "300px" : "100px")};
  height: 100vh;
  transition: max-width 1s ease, width 0.3s ease;
  padding: 10px;
  display: flex;
  flex-direction: column;
  ${({ $active }) =>
    $active &&
    css`
      animation: ${expandAnimation} 0.6s ease-in;
    `}
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
export const PageBtn = styled(NavLink)<{ $active: boolean }>`
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
  ${({ $active }) =>
    !$active
      ? `display:flex; 
    justify-content:center;
    align-items:start; `
      : ""};
  * {
    cursor: pointer;
  };
  p {
    font-weight: 500;
    font-size: 17px;
  }
  &.active {
    background-color: #fff;
    color: #000;
  }
`;
export const TabBtn = styled.div<{ $active: boolean }>`
  border-radius: 10px;
  width: ${({ $active }) => ($active ? "280px" : "100%")};
  min-height: 70px;
  background: rgba(255, 255, 255, 0.1);
  margin-bottom: 10px;
  color: #fff;
  overflow: hidden;
  ${({ $active }) =>
    !$active
      ? `display:flex; 
    justify-content:center;
    align-items:start; `
      : ""};
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
