import styled from "styled-components";

export const Description = styled.p`
  color: #fff;
  font-size: 16px;
  font-weight: 300;
`;
export const User = styled.div`
  display: flex;
  padding: 25px 20px;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.15);

  img {
    width: 42px;
    height: 42px;
    margin: 0 !important;
    border-radius: 50%;
  }

  h2 {
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 5px;
  }

  p {
    margin: 0 !important;
    color: rgba(255, 255, 255, 0.7);
    font-size: 12px;
    font-weight: 400;
  }
`;