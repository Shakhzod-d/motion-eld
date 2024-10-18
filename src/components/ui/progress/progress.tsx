import { Progress } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
interface Props {
  percent: number;
  size?: number;
  color: string;
}
export const CustomProgress = ({ percent, size = 24, color }: Props) => {
  const dark = useSelector((state:RootState)=>state.booleans.darkMode)
  return (
    <Progress
    trailColor={dark ? "gray" : ""}
      type="dashboard"
      percent={percent}
      size={size}
      strokeWidth={22}
      showInfo={false}
      strokeColor={color}
    />
  );
};
