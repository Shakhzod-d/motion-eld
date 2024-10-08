import { Progress } from "antd";
import { FC } from "react";
import { ProgressWrapper, Title, Value, ValueWrapper } from "./progress-styled";
interface Props {
  title: string;
  value: number;
  color: string;
}

export const ProgressBar: FC<Props> = ({ title, value, color }) => {
  return (
    <ProgressWrapper>
      <Progress
        type="dashboard"
        percent={value}
        size={155}
        gapDegree={70}
        strokeColor={color}
        strokeWidth={15}
        format={(percent = 0) => `${percent / 10} (${percent}%)`}
        showInfo={false}
      />
      <ValueWrapper>
        <div style={{ color }}>
          <Title>{title}</Title>
        </div>

        <Value>{`${value / 10} (${value}%)`}</Value>
      </ValueWrapper>
    </ProgressWrapper>
  );
};
