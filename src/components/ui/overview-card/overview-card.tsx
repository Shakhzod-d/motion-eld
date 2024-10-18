import { useSelector } from "react-redux";
import { InfoCard } from "../../../utils/index";
import {
  Item,
  Title,
  Value,
  Wrapper,
  StyleFlex,
  ResText,
  ResTitle,
} from "./overview-styled";
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
          <Text $font="590" $mb="42px" >
            Overview
          </Text>

          <Wrapper>
            <Item>
              <Value style={{ color: "#32BE61" }}>38</Value>
              <Title>Active drivers</Title>
            </Item>
            <Item>
              <Value style={{ color: "#EF3E2D" }}>44</Value>
              <Title>Active vehicles</Title>
            </Item>
            <Item>
              <Value style={{ color: "#FC973A" }}>890</Value>
              <Title>Inspection</Title>
            </Item>
          </Wrapper>
        </>
      ) : (
        <StyleFlex>
          <ResTitle>Overview</ResTitle>
          <Flex gap={"small"}>
            <ResText $clr="#32BE61">38</ResText>
            <ResText >Active drivers</ResText>
          </Flex>
          <Flex gap={"small"}>
            <ResText $clr="#EF3E2D">44</ResText>
            <ResText >Active vehicles</ResText>
          </Flex>
          <Flex gap={"small"}>
            <ResText $clr="#FC973A">890</ResText>
            <ResText >Inspection</ResText>
          </Flex>
        </StyleFlex>
      )}
    </InfoCard>
  );
};
