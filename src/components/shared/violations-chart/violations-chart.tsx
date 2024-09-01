import { InfoCard } from "../../../utils/index";
import { ProgressBar } from "../progress-bar";
import { Title } from "./violations-styled";

export const ViolationsChart = () => {
  return (
    <div>
      <InfoCard>
        <Title>Violations Chart</Title>
        <div style={{ display: "flex", gap: "40px", justifyContent: "center" }}>
          <ProgressBar title="Violations" value={20} color="#EF3E2D" />
          <ProgressBar title="Violations" value={80} color="#FC973A" />
        </div>
      </InfoCard>
    </div>
  );
};
