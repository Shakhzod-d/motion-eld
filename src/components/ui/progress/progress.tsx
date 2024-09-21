import { Progress } from "antd";
interface Props {
  percent: number;
  size?: number;
  color: string;
}
export const CustomProgress = ({ percent, size = 24, color }: Props) => {
  return (
    <Progress
      type="dashboard"
      percent={percent}
      size={size}
      strokeWidth={22}
      showInfo={false}
      strokeColor={color}
    />
  );
};
