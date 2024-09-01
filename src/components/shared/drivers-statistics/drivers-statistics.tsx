import { Flex } from "antd";
import { Left, Right } from "./drivers-statistics-styled";
import { driversStatisticsData } from "../../../utils";

export const DriversStatistics = () => {
  return (
    <Flex gap={11}>
      {driversStatisticsData.map((item) => (
        <Flex gap={2} key={item.id}>
          <Left color={item.color}>{item.statistics_number}</Left>
          <Right color={item.color}>{item.text}</Right>
        </Flex>
      ))}
    </Flex>
  );
};
