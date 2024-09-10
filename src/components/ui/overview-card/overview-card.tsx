import { useSelector } from "react-redux";
import { InfoCard } from "../../../utils/index";
import { Item, Title, Value, Wrapper } from "./overview-styled";
import { RootState } from "../../../store/store";
import { Flex } from "antd";
import { Text } from "../../../utils/constants";

export const OverviewCard = () => {
  const active = useSelector(
    (state: RootState) => state.booleans.dashboardProgress
  );
  return (
    <InfoCard $active={active}>
      {active ? (
        <>
          <p
            style={{
              fontWeight: "590",
              color: "#303030",
              marginBottom: "42px",
            }}
          >
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
        </>
      ) : (
        <Flex gap={"50px"} align="center">
          <Text $font="600">Overview</Text>
          <Flex gap={"middle"} align="center">
            <Flex gap={"small"}>
              <Text color="#32BE61">38</Text>
              <Text color="#5D5E5F">Active drivers</Text>
            </Flex>
            <Flex gap={"small"}>
              <Text color="#EF3E2D">44</Text>
              <Text color="#5D5E5F">Active vehicles</Text>
            </Flex>
            <Flex gap={"small"}>
              <Text color="#FC973A">890</Text>
              <Text color="#5D5E5F">Inspection</Text>
            </Flex>
          </Flex>
        </Flex>
      )}
    </InfoCard>
  );
};
