import { InfoCard } from "../../../utils/index";
import { FaPowerOff } from "react-icons/fa";
import { TbMoonStars } from "react-icons/tb";
import { BsTruck } from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";
import { Item, ItemTitle, Title } from "./drivers-style";

export const Drivers = () => {
  return (
    <InfoCard>
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
    </InfoCard>
  );
};
