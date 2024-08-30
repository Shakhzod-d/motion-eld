import styled from "styled-components";
import { InfoCard } from "../../utils";
const Wrapper = styled.div`
  display: flex;
  gap: 56px;
  justify-content: center;
`;
const Value = styled.p`
  font-weight: 590;
  font-size: 48px;
  margin-bottom: 15px;
`;
const Title = styled.p`
  font-weight: 590;
  font-size: 14px;
  text-align: center;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const OverviewCard = () => {
  return (
    <InfoCard>
      <p style={{ fontWeight: "590", color: "#303030", marginBottom: "42px" }}>
        Overview
      </p>
      <Wrapper>
        <Item>
          <Value style={{ color: "#32BE61" }}>38</Value>
          <Title style={{ color: "#5D5E5F" }}>Active drivers</Title>
        </Item>
        <Item>
          <Value style={{ color: "#EF3E2D" }}>44</Value>
          <Title style={{ color: "#5D5E5F" }}>Active vehicles</Title>
        </Item>
        <Item>
          <Value style={{ color: "#FC973A" }}>890</Value>
          <Title style={{ color: "#5D5E5F" }}>Inspection</Title>
        </Item>
      </Wrapper>
    </InfoCard>
  );
};
