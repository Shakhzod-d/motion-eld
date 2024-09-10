import { InfoCard } from "../../../utils/index";
import { FaPowerOff } from "react-icons/fa";
import { TbMoonStars } from "react-icons/tb";
import { BsTruck } from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";
import { Item, ItemTitle, Title } from "./drivers-style";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { Text } from "../../../utils/constants";
import { Flex } from "antd";

export const Drivers = () => {
  const active = useSelector(
    (state: RootState) => state.booleans.dashboardProgress
  );
  return (
    <InfoCard $active={active}>
      {active ? (
        <>
          <Title>Drivers</Title>
          <div style={{ display: "flex", gap: "50px" }}>
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
        <Flex gap={"90px"} align="center">
          <Text $font="600">Drivers</Text>
          <Flex gap={"25px"} align="center">
            <Text $font="500" color="#5D5E5F">
              Off duty 12
            </Text>
            <Text $font="500" color="#3DA8D5">
              On duty 4
            </Text>
            <Text $font="500" color="#32BE61">
              Driving 6
            </Text>
            <Text $font="500" color="#FC973A">
              Sleeping 0
            </Text>
          </Flex>
        </Flex>
      )}
    </InfoCard>
  );
};
