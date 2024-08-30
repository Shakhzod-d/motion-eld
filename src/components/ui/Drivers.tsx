import styled from "styled-components";
import { InfoCard } from "../../utils";
import { FaPowerOff } from "react-icons/fa";
import { TbMoonStars } from "react-icons/tb";
import { BsTruck } from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";

const Item = styled.div`
  width: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ItemTitle = styled.p`
  font-weight: 590;
  font-size: 14px;
  color: #5d5e5f;
  margin-bottom: 5px;
`;

export const Drivers = () => {
  return (
    <InfoCard>
      <p style={{ fontWeight: "590", color: "#303030", marginBottom: "42px" }}>
        Drivers
      </p>
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
