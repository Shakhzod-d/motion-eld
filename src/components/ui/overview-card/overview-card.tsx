import { useSelector } from "react-redux";
import { InfoCard } from "../../../utils/index";
import { Item, Title, Value, Wrapper, ChartText, StyleFlex } from "./overview-styled";
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
          <Text $font="590" $mb="42px" color="#303030">
            Overview
          </Text>

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
          <StyleFlex>
          <ChartText $size="16px">Overview</ChartText>
            <Flex gap={"small"}>
              <ChartText $clr="#32BE61">38</ChartText>
              <ChartText $clr="#5D5E5F">Active drivers</ChartText>
            </Flex>
            <Flex gap={"small"}>
              <ChartText $clr="#EF3E2D">44</ChartText>
              <ChartText $clr="#5D5E5F">Active vehicles</ChartText>
            </Flex>
            <Flex gap={"small"}>
              <ChartText $clr="#FC973A">890</ChartText>
              <ChartText $clr="#5D5E5F">Inspection</ChartText>
            </Flex>
          </StyleFlex>
      )}
    </InfoCard>
  );
};
