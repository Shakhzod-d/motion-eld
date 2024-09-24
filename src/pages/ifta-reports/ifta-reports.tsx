import { useState } from "react";
import { Flex,  } from "antd";
import { ReportsSelect, TransparentButton } from "./ifta-reports-styled";
import {
  IftaReportButtons,
  IftaReportColData,
  IftaReportData,
  IftaReportSelectData,
  Main,
} from "../../utils/index";
import { Navbar } from "../../components/ui";
import { CustomTable } from "../../components/shared";

export const IftaReports = () => {
  const [activeBtn, setActiveBtn] = useState<number>(1);

  return (
    <Main>
      <Navbar title={"Ifta Reports"} />

      {/* Ifta Reports sort select items */}

      <Flex justify="space-between" align="center">
        <Flex gap={10}>
          {IftaReportSelectData.map((item) => (
            <ReportsSelect
              key={item.id}
              defaultValue={item.defaultValue}
              options={item.options}
            />
          ))}
        </Flex>

        <TransparentButton>Generate CSV</TransparentButton>
      </Flex>

      {/* Ifta Reports change UI data buttons */}

      <Flex gap={"10px"} style={{ margin: "20px 0" }}>
        {IftaReportButtons.map((item) => (
          <TransparentButton
            key={item.id}
            active={(activeBtn == item.id).toString()}
            onClick={() => setActiveBtn(item.id)}
          >
            {item.text}
          </TransparentButton>
        ))}
      </Flex>

      {/* Ifta Reports data table */}

      <CustomTable columns={IftaReportColData} data={IftaReportData} />
    </Main>
  );
};
