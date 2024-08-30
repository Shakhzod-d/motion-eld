import styled from "styled-components";
import { Drivers, OverviewCard } from "../../components/ui";
import { DriversInfoTable, ViolationsChart } from "../../components/shared";
import { Button } from "antd";
import { useState } from "react";

const Main = styled.main`
  border-radius: 20px;
  padding: 20px;
  width: 100%;
  max-width: 1615px;
  height: 100vh;
  background: #f3f3f4;
  overflow: "hidden";
`;
const Day = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 2px;
  margin-bottom: 10px;
`;
const DayBtn = styled(Button)`
  padding: 15px 30px;
  width: 81px;
  height: 49px;
`;
const Title = styled.h2`
  font-weight: 500;
  font-size: 32px;
  letter-spacing: -0.02em;
  color: #000;
  margin-bottom: 20px;
`;
const btnArr = [
  { id: 1, text: "8D", border: "10px 2px 2px 10px" },
  { id: 2, text: "12D", border: "2px" },
  { id: 3, text: "30D", border: "2px 10px 10px 2px" },
];
export const Dashboard = () => {
  const [activeBtn, setActiveBtn] = useState<number>(1);
  return (
    <Main>
      <div>Header</div>
      <Day>
        {btnArr.map((item) => (
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
