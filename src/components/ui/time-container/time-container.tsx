import {
  Between,
  Box,
  SmallBox,
} from "../../../utils/constants";
import { Flex } from "./time-styled";
export const TimeContainer = () => {
  return (
    <Between>
      <Flex>
        <Box>03-10-2024</Box>
        <SmallBox></SmallBox>
        <SmallBox></SmallBox>
      </Flex>
      <Flex>
        <Box>Driver name</Box>
        <Box>Location</Box>
        <Box>Violation</Box>
        <SmallBox></SmallBox>
        <Box>Warnings</Box>
        <SmallBox></SmallBox>
      </Flex>
    </Between>
  );
};
