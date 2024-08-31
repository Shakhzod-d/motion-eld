import { useState } from "react";

import { Drivers, OverviewCard } from "../../components/ui";
import { DriversInfoTable, ViolationsChart } from "../../components/shared";
import { Day, DayBtn, Main, Title } from "./dashboard-style";
import { btnArr } from "../../utils/constants";

export const Dashboard = () => {
  const [activeBtn, setActiveBtn] = useState<number>(1);

  return (
    <Main>
      <div>Header</div>
      <Day>
        {btnArr.map((item) => (
          // MUST CHECK
          <DayBtn
            key={item.id}
            style={{
              borderRadius: item.border,
              background: `${activeBtn == item.id ? "#19223f" : ""}`,
            }}
            type={activeBtn == item.id ? "primary" : "default"}
            onClick={() => setActiveBtn(item.id)}
          >
            {item.text}
          </DayBtn>
        ))}
      </Day>
      <div
        style={{
          display: "flex",
          gap: "12px",
          marginBottom: "40px",
          justifyContent: "space-between",
          overflow: "hidden",
        }}
      >
        <Drivers />
        <ViolationsChart />
        <OverviewCard />
      </div>
      <Title>Drivers info</Title>
      <DriversInfoTable />
    </Main>
  );
};
