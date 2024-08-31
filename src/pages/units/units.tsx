import { useState, type FC } from "react";
import {
  ActiveBtn,
  DefaultBtn,
  ModalCheckBox,
  ModalInput,
  ModalSelect,
  ModalTextArea,
  PrimaryBtn,
  TopContainer,
} from "./units-styled";
import { Flex, Modal, Table, TableProps } from "antd";

interface UnitsProps {
  data?: string[];
}

interface DataType {
  key: string;
  id: string;
  index: number;
  driver_name: string;
  model: string;
  eld: string;
  notes: string;
  vin: string;
  documents: string;
  activated: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "#",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Vehicle ID",
    dataIndex: "index",
    key: "index",
  },
  {
    title: "Drivers",
    dataIndex: "driver_name",
    key: "drivers_name",
  },
  {
    title: "Make/Model",
    dataIndex: "model",
    key: "model",
  },
  {
    title: "Eld",
    dataIndex: "eld",
    key: "eld",
  },
  {
    title: "Notes",
    dataIndex: "notes",
    key: "notes",
  },
  {
    title: "VIN",
    dataIndex: "vin",
    key: "vin",
  },
  {
    title: "Documents",
    dataIndex: "documents",
    key: "documents",
  },
  {
    title: "Activated",
    dataIndex: "activated",
    key: "activated",
  },
];

const data: DataType[] = Array(70).fill({
  key: "name",
  id: "0",
  index: 152,
  driver_name: "Davit Kiknavelidze",
  model: "Freightliner/ Cascadia",
  eld: "PT30_09A3",
  notes: "1FUJGLDV2HLJH2911",
  vin: "Not uploaded",
  documents: "2024-03-02",
  activated: "",
});

export const Units: FC<UnitsProps> = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section>
        <TopContainer>
          <PrimaryBtn
            style={{ padding: "20px 35px" }}
            onClick={() => setOpen(true)}
          >
            Add new vehicle
          </PrimaryBtn>
        </TopContainer>
        <ActiveBtn style={{ padding: "20px 35px" }}>Vehicle</ActiveBtn>
        <DefaultBtn style={{ padding: "20px 35px", marginLeft: "5px" }}>
          Deactivated
        </DefaultBtn>
        <Table
          columns={columns}
          dataSource={data}
          id="table"
          style={{ marginTop: "20px" }}
        />
      </section>
      <Modal
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <h2 className="modal-title">Create Vehicle</h2>
        <Flex
          justify="space-between"
          gap="10px"
          style={{ marginBottom: "10px" }}
        >
          <ModalInput placeholder="Vehicle ID" type="number" />
          <ModalSelect
            defaultValue={"default"}
            options={[{ value: "default", label: "Makes" }]}
          />
        </Flex>
        <Flex
          justify="space-between"
          gap="10px"
          style={{ marginBottom: "10px" }}
        >
          <ModalSelect
            defaultValue={"default"}
            options={[{ value: "default", label: "Models" }]}
          />
          <ModalInput placeholder="Licensec Plate No" type="number" />
        </Flex>
        <Flex
          justify="space-between"
          gap="10px"
          style={{ marginBottom: "10px" }}
        >
          <ModalSelect
            defaultValue={"default"}
            options={[
              { value: "default", label: "Licensec Plate Issuing State" },
            ]}
          />
          <ModalSelect
            defaultValue={"default"}
            options={[{ value: "default", label: "Year" }]}
          />
        </Flex>
        <Flex>
          <ModalSelect
            defaultValue={"default"}
            options={[{ value: "default", label: "Fuel Type" }]}
            style={{ width: "100%" }}
          />
        </Flex>
        <ModalTextArea placeholder="Notes" />
        <Flex vertical style={{ marginBottom: "10px" }}>
          <ModalCheckBox>Enter Vin Manually</ModalCheckBox>
          <ModalInput placeholder="Type" style={{ width: "100%" }} />
        </Flex>
        <Flex vertical style={{ marginBottom: "10px" }}>
          <ModalCheckBox>
            Get Automatically from ELD ( recommended )
          </ModalCheckBox>
          <ModalInput placeholder="Type" style={{ width: "100%" }} />
        </Flex>
        <Flex justify="end" gap={"10px"}>
          <DefaultBtn
            onClick={() => setOpen(false)}
            style={{ width: "200px", height: "55px" }}
          >
            Close
          </DefaultBtn>
          <PrimaryBtn
            onClick={() => setOpen(false)}
            style={{ width: "200px", height: "55px" }}
          >
            Save
          </PrimaryBtn>
        </Flex>
      </Modal>
    </>
  );
};
