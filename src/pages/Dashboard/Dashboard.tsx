import { useState } from "react";

import { DriversInfoTable, ViolationsChart } from "../../components/shared";
import { Drivers, Navbar, OverviewCard } from "../../components/ui";
import { btnArr, Main } from "../../utils/index";
import { CardWrapper, Day, DayBtn, Title } from "./dashboard-styled";

export const Dashboard = () => {
  const [activeBtn, setActiveBtn] = useState<number>(1);
  // this is commit
  return (
    <Main>
      <Navbar title="Dashboard" />
      <Day>
        {btnArr.map((item) => (
          <DayBtn
            $active={activeBtn == item.id}
            border={item.border}
            key={item.id}
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
