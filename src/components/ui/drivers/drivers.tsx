import { InfoCard } from "../../../utils/index";
import { FaPowerOff } from "react-icons/fa";
import { TbMoonStars } from "react-icons/tb";
import { BsTruck } from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";
import { Item, ItemTitle, Title } from "./drivers-style";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

import { Flex } from "antd";
import { ChartText } from "../overview-card/overview-styled";

export const Drivers = () => {
  const active = useSelector(
    (state: RootState) => state.booleans.dashboardProgress
  );
  return (
    <InfoCard $active={active}>
      {active ? (
        <>
          <Title>Drivers</Title>
          <div style={{ display: "flex", gap: "10px" }}>
            <Item>
              <FaPowerOff
                color="#b0b0b9"
                style={{ width: "48px", height: "48px", marginBottom: "15px" }}
              />
              <ItemTitle>off duty</ItemTitle>
              <b style={{ fontSize: "20px" }}>12</b>
            </Item>
            <Item>
              <GrUserAdmin
                color="#3DA8D5"
                style={{ width: "48px", height: "48px", marginBottom: "15px" }}
              />
              <ItemTitle>On duty</ItemTitle>
              <b style={{ fontSize: "20px" }}>12</b>
            </Item>
            <Item>
              <BsTruck
                color="#32BE61"
                style={{ width: "48px", height: "48px", marginBottom: "15px" }}
              />
              <ItemTitle>Driving</ItemTitle>
              <b style={{ fontSize: "20px" }}>12</b>
            </Item>
            <Item>
              <TbMoonStars
                color="#FC973A"
                style={{ width: "48px", height: "48px", marginBottom: "15px" }}
              />
              <ItemTitle>Sleeping</ItemTitle>
              <b style={{ fontSize: "20px" }}>0</b>
            </Item>
          </div>
        </>
      ) : (
        <Flex gap={"20px"} align="center">
          <ChartText>Drivers</ChartText>
          <Flex gap={"small"} align="center" justify="space-between">
            <ChartText $clr="#5D5E5F">Off duty 12</ChartText>
            <ChartText $clr="#3DA8D5">On duty 4</ChartText>
            <ChartText $clr="#32BE61">Driving 6</ChartText>
            <ChartText $clr="#FC973A">Sleeping 0</ChartText>
          </Flex>
        </Flex>
      )}
    </InfoCard>
  );
};
