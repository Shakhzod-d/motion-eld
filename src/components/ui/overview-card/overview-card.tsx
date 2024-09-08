import { InfoCard } from "../../../utils/index";
import { Item, Title, Value, Wrapper } from "./overview-styled";

export const OverviewCard = () => {
  return (
    <InfoCard>
      <p style={{ fontWeight: "590", color: "#303030", marginBottom: "42px"}}>
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
