import { useSelector } from "react-redux";
import { InfoCard } from "../../../utils/index";
import { Item, Title, Value, Wrapper, ChartText } from "./overview-styled";
import { RootState } from "../../../store/store";
import { Flex } from "antd";


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
        <Flex gap={"15px"} align="center">
          <ChartText $size="16px">Overview</ChartText>
          <Flex gap={"middle"} align="center">
            <Flex gap={"small"}>
              <ChartText $clr="#32BE61">38</ChartText>
              <ChartText $clr="#5D5E5F">
                Active drivers
              </ChartText>
            </Flex>
            <Flex gap={"small"}>
              <ChartText $clr="#EF3E2D">44</ChartText>
              <ChartText $clr="#5D5E5F">Active vehicles</ChartText>
            </Flex>
            <Flex gap={"small"}>
              <ChartText $clr="#FC973A">890</ChartText>
              <ChartText $clr="#5D5E5F">Inspection</ChartText>
            </Flex>
          </Flex>
        </Flex>
      )}
    </InfoCard>
  );
};
