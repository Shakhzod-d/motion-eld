import { Progress } from "antd";
import { Container, Info } from "./drivers-diagram-styled";
import { Text } from "../../../utils/constants";
interface Props {
  title: string;
  value: number;
  color: string;
  valueData:string

}
export const DriversDiagram = ({ title, value, color,valueData }: Props) => {
  return (
    <Container>
      <Progress
        type="dashboard"
        percent={value}
        size={155}
        strokeColor={color}
        strokeWidth={12}
        showInfo={false}
      />
      <Info>
        <Text size={13} color={color}>
          {title}
        </Text>
        <Text size={24} $font="600">
          {valueData}
        </Text>
      </Info>
    </Container>
  );
};
