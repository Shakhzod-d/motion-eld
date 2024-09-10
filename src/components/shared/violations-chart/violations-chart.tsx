import { InfoCard } from "../../../utils/index";
import { ProgressBar } from "../progress-bar";
import { Title } from "./violations-styled";
import { Text } from "../../../utils/constants";
import { Flex, Progress } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

export const ViolationsChart = () => {
  const active = useSelector(
    (state: RootState) => state.booleans.dashboardProgress
  );
  return (
    <div>
      <InfoCard $active={active}>
        {active || (
          <>
            <Text>Violations Chart</Text>
            <Flex gap={"middle"} align="center">
              <Flex gap={"small"} align="center">
                <Text size={14} color="#EF3E2D" $font="500">
                  Violations
                </Text>
                <Progress
                  type="dashboard"
                  percent={20}
                  size={24}
                  strokeWidth={22}
                  showInfo={false}
                  strokeColor={"#EF3E2D"}
                />
                <Text size={14} $font="600">
                  2 ( 20% )
                </Text>
              </Flex>
              <Flex gap={"small"} align="center">
                <Text size={14} color="#FC973A" $font="500">
                  Signature
                </Text>
                <Progress
                  type="dashboard"
                  percent={80}
                  size={24}
                  strokeWidth={22}
                  showInfo={false}
                  strokeColor={"#FC973A"}
                />
                <Text size={14} $font="600">
                  8 ( 80% )
                </Text>
              </Flex>
            </Flex>
          </>
        )}
        {active && (
          <>
            <Title>Violations Chart</Title>
            <div
              style={{
                display: "flex",
                gap: "40px",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <ProgressBar title="Violations" value={20} color="#EF3E2D" />
              <ProgressBar title="Violations" value={80} color="#FC973A" />
            </div>
          </>
        )}
      </InfoCard>
    </div>
  );
};
