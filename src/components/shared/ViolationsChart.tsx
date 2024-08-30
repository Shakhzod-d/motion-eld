import { InfoCard } from "../../utils";
import { ProgressBar } from "./ProgressBar";

export const ViolationsChart = () => {
  return (
    <div>
      <InfoCard>
        <p
          style={{ fontWeight: "590", color: "#303030", marginBottom: "20px" }}
        >
          Violations Chart
        </p>
        <div style={{ display: "flex", gap: "40px", justifyContent: "center" }}>
          <ProgressBar title="Violations" value={20} color="#EF3E2D" />
          <ProgressBar title="Violations" value={80} color="#FC973A" />
        </div>
      </InfoCard>
    </div>
  );
};
