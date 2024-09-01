import { useState } from "react";

import { DriversInfoTable, ViolationsChart } from "../../components/shared";
import { Drivers, Navbar, OverviewCard } from "../../components/ui";
import { btnArr, Main } from "../../utils/constants";
import { CardWrapper, Day, DayBtn, Title } from "./dashboard-styled";
// import { CardWrapper, Day, DayBtn, Title } from "./dashboard-styled";

export const Dashboard = () => {
  const [activeBtn, setActiveBtn] = useState<number>(1);

  return (
    <Main>
      <Navbar title="Dashboard" />
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
      <CardWrapper>
        <Drivers />
        <ViolationsChart />
        <OverviewCard />
      </CardWrapper>
      <Title>Drivers info</Title>
      <DriversInfoTable />
    </Main>
  );
};
