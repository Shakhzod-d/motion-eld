import { MdOutlineArrowBack } from "react-icons/md";
import { Between, Box, SmallBox } from "../../../utils/constants";
import { Flex } from "antd";

export const TimeContainer = () => {
  return (
    <Between>
      <Flex align="center" gap={"small"} justify="center">
        <Box>03-10-2024</Box>
        <SmallBox>
          <MdOutlineArrowBack />
        </SmallBox>
        <SmallBox style={{ rotate: "180deg" }}>
          <MdOutlineArrowBack />
        </SmallBox>
      </Flex>
      <Flex gap={"small"}>
        <Box>Driver name</Box>
        <Box>Location</Box>

        <Box>Warnings</Box>
      </Flex>
    </Between>
  );
};
