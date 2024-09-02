import { DriversStatistics } from "../../components/shared";
import { Navbar } from "../../components/ui";
import { Main } from "../../utils";
import { LogsTabPages } from "../../utils/constants";
import { ReflashButton, StyleTabs } from "./logs-styled";
// import { ReflashButton, StyleTabs } from "./logs-styled";
// import { ReflashButton, StyleTabs } from "./logs-styled";

export const Logs = () => {
  return (
    <Main>
      <Navbar title="Logs" />
      <DriversStatistics />
      <ReflashButton>Reflash</ReflashButton>
      <StyleTabs
        defaultActiveKey="1"
        type="card"
        size="large"
        tabBarGutter={5}
        items={LogsTabPages}
      />
    </Main>
  );
};
