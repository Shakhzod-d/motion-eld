import { useState } from "react";
import {
  ActiveBtn,
  DefaultBtn,
  ModalCheckBox,
  ModalInput,
  ModalSelect,
  ModalTextArea,
  ModalTitle,
  PrimaryBtn,
  TopContainer,
} from "./units-styled";
import { Table, Flex, Modal } from "antd";

const columns = [
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

const data = Array(10).fill({
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

export const Units = () => {
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
        <ModalTitle>Create Vehicle</ModalTitle>
        <Flex vertical gap={10}>
          <Flex justify="space-between" gap="10px">
            <ModalInput placeholder="Vehicle ID" type="number" />
            <ModalSelect
              defaultValue={"default"}
              options={[{ value: "default", label: "Makes" }]}
            />
          </Flex>
          <Flex justify="space-between" gap="10px">
            <ModalSelect
              defaultValue={"default"}
              options={[{ value: "default", label: "Models" }]}
            />
            <ModalInput placeholder="Licensec Plate No" type="number" />
          </Flex>
          <Flex justify="space-between" gap="10px">
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
          <Flex vertical>
            <ModalCheckBox>Enter Vin Manually</ModalCheckBox>
            <ModalInput placeholder="Type" style={{ width: "100%" }} />
          </Flex>
          <Flex vertical>
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
        </Flex>
      </Modal>
    </>
  );
};
