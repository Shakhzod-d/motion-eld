import styled from "styled-components";

export const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 100px));
  align-items: start;
  padding: 20px 25px;
  border-radius: 10px;
  border: 1px solid #fdfdfd;
  background: #fdfdfd;
  transition: 0.3s ease;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-bottom: 5px;
  gap: 20px;
  color:#5D5E5F;
  div {
    min-width: 300px;
  }
  * {
    overflow: hidden;
  }
`;

export const BtnGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 45px;
  margin-top: 40px;
  & > button {
    width: 150px;
    height: 50px;
  }
  div {
    display: flex;
    gap: 10px;
    button {
      width: 200px;
      height: 60px;
    }
  }
`;
export const CardsTop = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 100px));
  justify-content: space-between;
  padding: 20px 24px;
  color: #303030;
  font-size: 14px;
  font-weight: 400;
  p{
    fon
  }
`;
