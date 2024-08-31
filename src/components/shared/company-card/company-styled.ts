import styled from "styled-components";

export const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  align-items: start;
  padding: 20px 25px;
  border-radius: 10px;
  border: 1px solid #fdfdfd;
  background: #fdfdfd;
  transition: 0.3s ease;
  cursor: pointer;
  margin-bottom: 5px;
  gap: 20px;

  * {
    overflow: hidden;
  }

  &:hover {
    border-color: #fc973a;
  }

  & > div {
    max-width: 355px;
    width: 100%;
  }

  .card-name {
    display: flex;
    gap: 10px;

    .card-img {
      padding: 5px;
      border: 1px solid #e4e4e4;
      border-radius: 5px;
      height: 100%;
    }

    h2 {
      color: #303030;
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 5px;
    }
  }

  p {
    display: flex;
    align-items: center;
    color: #5d5e5f;
    font-size: 14px;
    font-weight: 400;
    gap: 5px;
    margin-bottom: 5px;
  }

  svg {
    opacity: 0.6;
    width: 16px;
    height: 16px;
  }

  .card-status {
    span {
      color: #32be61;
      font-size: 16px;
      font-weight: 700;
    }
  }

  .card-created p {
    color: #000;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%; /* 21px */
  }

  .card-edit {
    color: #fc973a;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.5px;
    display: flex;
    align-items: center;
    svg {
      path {
        fill: #fd7a00;
      }
    }
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
