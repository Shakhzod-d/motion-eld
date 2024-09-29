import { InfoCard } from "../../../utils/index";
import { ProgressBar } from "../progress-bar";

import { Text } from "../../../utils/constants";
import { Flex, Progress } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { ChartText } from "../../ui/overview-card/overview-styled";

export const ViolationsChart = () => {
  const active = useSelector(
    (state: RootState) => state.booleans.dashboardProgress
  );
  return (
    <div>
      <InfoCard $active={active}>
        {active || (
          <>
            <Flex gap={"middle"} align="center" justify="s">
            <ChartText>Violations Chart</ChartText>
              <Flex gap={"small"} align="center">
                <ChartText $clr="#EF3E2D">Violations</ChartText>
                <Progress
                  type="dashboard"
                  percent={20}
                  size={22}
                  strokeWidth={22}
                  showInfo={false}
                  strokeColor={"#EF3E2D"}
                />
                <ChartText>2 ( 20% )</ChartText>
              </Flex>
              <Flex gap={"small"} align="center">
                <ChartText $clr="#FC973A">Signature</ChartText>
                <Progress
                  type="dashboard"
                  percent={80}
                  size={22}
                  strokeWidth={22}
                  showInfo={false}
                  strokeColor={"#FC973A"}
                />
                <ChartText $media_siz="10px">8 ( 80% )</ChartText>
              </Flex>
            </Flex>
          </>
        )}
        {active && (
          <>
            <Text $mb="30px">Violations Chart</Text>
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
