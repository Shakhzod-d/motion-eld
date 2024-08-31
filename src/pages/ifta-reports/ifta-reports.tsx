import { Flex, Table, TableProps } from "antd";
import { useState, type FC } from "react";
import { ReportsSelect, TransparentButton } from "./ifta-reports-styled";

interface IftaReportsProps {
  data?: string[];
}

interface DataType {
  key: string;
  vehicle: string;
  state: string;
  melis: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Vehicle",
    dataIndex: "vehicle",
    key: "vehicle",
  },
  {
    title: "State",
    dataIndex: "state",
    key: "state",
  },
  {
    title: "Melis",
    dataIndex: "melis",
    key: "melis",
  },
];

const data: DataType[] = Array(30).fill({
  key: "0",
  vehicle: "148",
  state: "AR",
  melis: "43",
});
const buttons = [
  { id: 1, text: "Vehicle" },
  { id: 2, text: "State" },
];

export const IftaReports: FC<IftaReportsProps> = () => {
  const [activeBtn, setActiveBtn] = useState<number>(1);
  return (
    <>
      <section>
        <Flex justify="space-between" align="center">
          <Flex gap={10}>
            <ReportsSelect
              defaultValue={"default"}
              options={[{ value: "default", label: "Year" }]}
            />
            <ReportsSelect
              defaultValue={"default"}
              options={[{ value: "default", label: "1 quater" }]}
            />
            <ReportsSelect
              defaultValue={"default"}
              options={[{ value: "default", label: "State" }]}
            />
            <ReportsSelect
              defaultValue={"default"}
              options={[{ value: "default", label: "Vehicle" }]}
            />
          </Flex>
          <TransparentButton>Generate CSV</TransparentButton>
        </Flex>
        <Flex gap={"10px"} style={{ margin: "20px 0" }}>
          {buttons.map((item) => (
            <TransparentButton
              key={item.id}
              style={{
                height: "60px",
                background: `${activeBtn == item.id ? "#19223F" : "#fff"}`,
                color: `${activeBtn == item.id ? "#fff" : "#000"}`,
              }}
              onClick={() => setActiveBtn(item.id)}
            >
              {item.text}
            </TransparentButton>
          ))}
        </Flex>
        <Table columns={columns} dataSource={data} />
      </section>
    </>
  );
};
