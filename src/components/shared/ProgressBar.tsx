import { Progress } from "antd";
import { FC } from "react";
import styled from "styled-components";
interface Props {
  title: string;
  value: number;
  color: string;
}
const Title = styled.p`
  font-weight: 700;
  font-size: 12px;
  letter-spacing: -0.04em;
  margin-bottom: 5px;
`;
const Value = styled.p`
  font-weight: 590;
  font-size: 14px;
`;
export const ProgressBar: FC<Props> = ({ title, value, color }) => {
  return (
    <div style={{ position: "relative", width: 200 }}>
      <Progress
        type="dashboard"
        percent={value}
        size={155}
        gapDegree={70}
        strokeColor={color}
        strokeWidth={15}
        format={(percent = 0) => `${percent / 10} (${percent}%)`}
        style={{ position: "relative", color: "red" }}
        showInfo={false}
      />
      <div
        style={{
          position: "absolute",
          top: "75px",
          left: "80px",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "#000",
        }}
      >
        <div style={{ color }}>
          <Title>{title}</Title>
        </div>

        <Value>{`${value / 10} (${value}%)`}</Value>
      </div>
    </div>
  );
};
