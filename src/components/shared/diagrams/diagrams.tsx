import { Flex } from "antd";
import { CustomButton, Wrapper } from "./diagrams-styled";
import { circleDiagram } from "../../../utils/constants";
import { DriversDiagram } from "../drivers-diagram";

export const Diagrams = () => {
  return (
    <>
      <Wrapper>
        <Flex justify="space-between" align="center ">
          <Flex gap={"middle"}>
            {circleDiagram.map((item) => (
              <DriversDiagram
                title={item.title}
                value={item.value}
                color={item.color}
                valueData={item.valueData}
              />
            ))}
          </Flex>
          <div>
            <Flex justify="end" gap={"small"} style={{ margin: "20px 0" }}>
              <CustomButton>Report</CustomButton>
              <CustomButton>Certify</CustomButton>
              <CustomButton>Duplicate</CustomButton>
            </Flex>
            <Flex justify="end" gap={"small"}>
              <CustomButton>Al check</CustomButton>
              <CustomButton>Correction</CustomButton>
              <CustomButton>Current Location</CustomButton>
              <CustomButton>EHF</CustomButton>
            </Flex>
          </div>
        </Flex>
      </Wrapper>
    </>
  );
};
