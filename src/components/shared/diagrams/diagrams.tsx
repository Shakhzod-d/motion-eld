import { Flex } from "antd";
import { CustomButton, Wrapper } from "./diagrams-styled";
import { CustomProgress } from "../../ui";
import { circleDiagram, Text } from "../../../utils/constants";

export const Diagrams = () => {
  return (
    <>
      <Wrapper>
        <Flex justify="space-between" align="center ">
          <Flex gap={"middle"} align="center">
            {circleDiagram.map((item) => (
              <Flex gap={"small"} key={item.id} align="center">
                <Flex gap={"small"}>
                  <Text color={item.color} $font="500">
                    {item.title}
                  </Text>
                  <Text $font="bold">{item.valueData}</Text>
                </Flex>
                <CustomProgress percent={item.value} color={item.color} />
              </Flex>
            ))}
          </Flex>

          <Flex gap={"small"} style={{ margin: "20px 0" }}>
            <CustomButton>Report</CustomButton>
            <CustomButton>Certify</CustomButton>
            <CustomButton>Duplicate</CustomButton>

            <CustomButton>Al check</CustomButton>
            <CustomButton>Correction</CustomButton>
            <CustomButton>Current Location</CustomButton>
            <CustomButton>EHF</CustomButton>
          </Flex>
        </Flex>
      </Wrapper>
    </>
  );
};
