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
} from "../units/units-styled";
import { Flex, Modal, Table, TableProps } from "antd";

interface DriversProps {
  data?: string[];
}

interface DataType {
  key: string;
  id: string;
  f_name: string;
  l_name: string;
  u_name: string;
  co_driver: string;
  driver_Type: string;
  app_version: string;
  documents: string;
  activated: string;
  device_info: string;
  action: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "#",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "First Name",
    dataIndex: "f_name",
    key: "f_name",
  },
  {
    title: "Last Name",
    dataIndex: "l_name",
    key: "l_name",
  },
  {
    title: "User Name",
    dataIndex: "u_name",
    key: "u_name",
  },
  {
    title: "Co driver",
    dataIndex: "co_driver",
    key: "co_driver",
  },
  {
    title: "Driver Type",
    dataIndex: "driver_type",
    key: "driver_type",
  },
  {
    title: "Vehicle ID",
    dataIndex: "v_id",
    key: "v_id",
  },
  {
    title: "App Version",
    dataIndex: "app_version",
    key: "app_version",
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
  {
    title: "Device Info",
    dataIndex: "device_info",
    key: "device_info",
    render: (text) => (
      <u>
        <b>{text}</b>
      </u>
    ),
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
];

const data: DataType[] = [
  {
    key: "name",
    id: "0",
    f_name: "Davis",
    l_name: "Miller",
    u_name: "captain_49",
    co_driver: "",
    driver_Type: "",
    app_version: "4.6.7",
    documents: "Not uploaded",
    activated: "2024-03-02",
    device_info: "Open",
    action: "",
  },
  {
    key: "name",
    id: "0",
    f_name: "Davis",
    l_name: "Miller",
    u_name: "captain_49",
    co_driver: "Daniel Smith",
    driver_Type: "",
    app_version: "4.6.7",
    documents: "Not uploaded",
    activated: "2024-03-02",
    device_info: "Open",
    action: "",
  },
  {
    key: "name",
    id: "0",
    f_name: "Davis",
    l_name: "Miller",
    u_name: "captain_49",
    co_driver: "Daniel Smith",
    driver_Type: "",
    app_version: "4.6.7",
    documents: "Not uploaded",
    activated: "2024-03-02",
    device_info: "Open",
    action: "",
  },
  {
    key: "name",
    id: "0",
    f_name: "Davis",
    l_name: "Miller",
    u_name: "captain_49",
    co_driver: "",
    driver_Type: "",
    app_version: "4.6.7",
    documents: "Not uploaded",
    activated: "2024-03-02",
    device_info: "Open",
    action: "",
  },
  {
    key: "name",
    id: "0",
    f_name: "Davis",
    l_name: "Miller",
    u_name: "captain_49",
    co_driver: "",
    driver_Type: "",
    app_version: "4.6.7",
    documents: "Not uploaded",
    activated: "2024-03-02",
    device_info: "Open",
    action: "",
  },
  {
    key: "name",
    id: "0",
    f_name: "Davis",
    l_name: "Miller",
    u_name: "captain_49",
    co_driver: "",
    driver_Type: "",
    app_version: "4.6.7",
    documents: "Not uploaded",
    activated: "2024-03-02",
    device_info: "Open",
    action: "",
  },
  {
    key: "name",
    id: "0",
    f_name: "Davis",
    l_name: "Miller",
    u_name: "captain_49",
    co_driver: "",
    driver_Type: "",
    app_version: "4.6.7",
    documents: "Not uploaded",
    activated: "2024-03-02",
    device_info: "Open",
    action: "",
  },
  {
    key: "name",
    id: "0",
    f_name: "Davis",
    l_name: "Miller",
    u_name: "captain_49",
    co_driver: "",
    driver_Type: "",
    app_version: "4.6.7",
    documents: "Not uploaded",
    activated: "2024-03-02",
    device_info: "Open",
    action: "",
  },
  {
    key: "name",
    id: "0",
    f_name: "Davis",
    l_name: "Miller",
    u_name: "captain_49",
    co_driver: "",
    driver_Type: "",
    app_version: "4.6.7",
    documents: "Not uploaded",
    activated: "2024-03-02",
    device_info: "Open",
    action: "",
  },
  {
    key: "name",
    id: "0",
    f_name: "Davis",
    l_name: "Miller",
    u_name: "captain_49",
    co_driver: "",
    driver_Type: "",
    app_version: "4.6.7",
    documents: "Not uploaded",
    activated: "2024-03-02",
    device_info: "Open",
    action: "",
  },
  {
    key: "name",
    id: "0",
    f_name: "Davis",
    l_name: "Miller",
    u_name: "captain_49",
    co_driver: "",
    driver_Type: "",
    app_version: "4.6.7",
    documents: "Not uploaded",
    activated: "2024-03-02",
    device_info: "Open",
    action: "",
  },
  {
    key: "name",
    id: "0",
    f_name: "Davis",
    l_name: "Miller",
    u_name: "captain_49",
    co_driver: "",
    driver_Type: "",
    app_version: "4.6.7",
    documents: "Not uploaded",
    activated: "2024-03-02",
    device_info: "Open",
    action: "",
  },
  {
    key: "name",
    id: "0",
    f_name: "Davis",
    l_name: "Miller",
    u_name: "captain_49",
    co_driver: "",
    driver_Type: "",
    app_version: "4.6.7",
    documents: "Not uploaded",
    activated: "2024-03-02",
    device_info: "Open",
    action: "",
  },
  {
    key: "name",
    id: "0",
    f_name: "Davis",
    l_name: "Miller",
    u_name: "captain_49",
    co_driver: "",
    driver_Type: "",
    app_version: "4.6.7",
    documents: "Not uploaded",
    activated: "2024-03-02",
    device_info: "Open",
    action: "",
  },
  {
    key: "name",
    id: "0",
    f_name: "Davis",
    l_name: "Miller",
    u_name: "captain_49",
    co_driver: "",
    driver_Type: "",
    app_version: "4.6.7",
    documents: "Not uploaded",
    activated: "2024-03-02",
    device_info: "Open",
    action: "",
  },
  {
    key: "name",
    id: "0",
    f_name: "Davis",
    l_name: "Miller",
    u_name: "captain_49",
    co_driver: "",
    driver_Type: "",
    app_version: "4.6.7",
    documents: "Not uploaded",
    activated: "2024-03-02",
    device_info: "Open",
    action: "",
  },
  {
    key: "name",
    id: "0",
    f_name: "Davis",
    l_name: "Miller",
    u_name: "captain_49",
    co_driver: "",
    driver_Type: "",
    app_version: "4.6.7",
    documents: "Not uploaded",
    activated: "2024-03-02",
    device_info: "Open",
    action: "",
  },
  {
    key: "name",
    id: "0",
    f_name: "Davis",
    l_name: "Miller",
    u_name: "captain_49",
    co_driver: "",
    driver_Type: "",
    app_version: "4.6.7",
    documents: "Not uploaded",
    activated: "2024-03-02",
    device_info: "Open",
    action: "",
  },
  {
    key: "name",
    id: "0",
    f_name: "Davis",
    l_name: "Miller",
    u_name: "captain_49",
    co_driver: "",
    driver_Type: "",
    app_version: "4.6.7",
    documents: "Not uploaded",
    activated: "2024-03-02",
    device_info: "Open",
    action: "",
  },
  {
    key: "name",
    id: "0",
    f_name: "Davis",
    l_name: "Miller",
    u_name: "captain_49",
    co_driver: "",
    driver_Type: "",
    app_version: "4.6.7",
    documents: "Not uploaded",
    activated: "2024-03-02",
    device_info: "Open",
    action: "",
  },
  {
    key: "name",
    id: "0",
    f_name: "Davis",
    l_name: "Miller",
    u_name: "captain_49",
    co_driver: "",
    driver_Type: "",
    app_version: "4.6.7",
    documents: "Not uploaded",
    activated: "2024-03-02",
    device_info: "Open",
    action: "",
  },
  {
    key: "name",
    id: "0",
    f_name: "Davis",
    l_name: "Miller",
    u_name: "captain_49",
    co_driver: "",
    driver_Type: "",
    app_version: "4.6.7",
    documents: "Not uploaded",
    activated: "2024-03-02",
    device_info: "Open",
    action: "",
  },
  {
    key: "name",
    id: "0",
    f_name: "Davis",
    l_name: "Miller",
    u_name: "captain_49",
    co_driver: "",
    driver_Type: "",
    app_version: "4.6.7",
    documents: "Not uploaded",
    activated: "2024-03-02",
    device_info: "Open",
    action: "",
  },
  {
    key: "name",
    id: "0",
    f_name: "Davis",
    l_name: "Miller",
    u_name: "captain_49",
    co_driver: "",
    driver_Type: "",
    app_version: "4.6.7",
    documents: "Not uploaded",
    activated: "2024-03-02",
    device_info: "Open",
    action: "",
  },
  {
    key: "name",
    id: "0",
    f_name: "Davis",
    l_name: "Miller",
    u_name: "captain_49",
    co_driver: "",
    driver_Type: "",
    app_version: "4.6.7",
    documents: "Not uploaded",
    activated: "2024-03-02",
    device_info: "Open",
    action: "",
  },
  {
    key: "name",
    id: "0",
    f_name: "Davis",
    l_name: "Miller",
    u_name: "captain_49",
    co_driver: "",
    driver_Type: "",
    app_version: "4.6.7",
    documents: "Not uploaded",
    activated: "2024-03-02",
    device_info: "Open",
    action: "",
  },
  {
    key: "name",
    id: "0",
    f_name: "Davis",
    l_name: "Miller",
    u_name: "captain_49",
    co_driver: "",
    driver_Type: "",
    app_version: "4.6.7",
    documents: "Not uploaded",
    activated: "2024-03-02",
    device_info: "Open",
    action: "",
  },
  {
    key: "name",
    id: "0",
    f_name: "Davis",
    l_name: "Miller",
    u_name: "captain_49",
    co_driver: "",
    driver_Type: "",
    app_version: "4.6.7",
    documents: "Not uploaded",
    activated: "2024-03-02",
    device_info: "Open",
    action: "",
  },
  {
    key: "name",
    id: "0",
    f_name: "Davis",
    l_name: "Miller",
    u_name: "captain_49",
    co_driver: "",
    driver_Type: "",
    app_version: "4.6.7",
    documents: "Not uploaded",
    activated: "2024-03-02",
    device_info: "Open",
    action: "",
  },
];

export const Drivers: FC<DriversProps> = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section>
        <TopContainer>
          <PrimaryBtn
            style={{ padding: "20px 35px" }}
            onClick={() => setOpen(true)}
          >
            Add new Driver
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
        width={"95%"}
        style={{ maxWidth: "1515px" }}
      >
        <h2 className="modal-title">Create Drivers</h2>
        <Flex vertical gap={10}>
          <Flex gap={10}>
            <ModalInput placeholder="First Name*" />
            <ModalInput placeholder="Last name*" />
            <ModalInput placeholder="Username*" />
            <ModalInput placeholder="Email*" type="email" />
          </Flex>
          <Flex gap={10}>
            <ModalInput placeholder="Password*" />
            <ModalInput placeholder="Phone No*" type="tel" />
            <ModalSelect
              defaultValue={"default"}
              options={[{ value: "default", label: "Vehicle ID" }]}
            />
            <ModalInput placeholder="Driver's License No*" />
          </Flex>
          <Flex gap={10}>
            <ModalSelect
              defaultValue={"default"}
              options={[
                { value: "default", label: "Driver's License Issuing State*" },
              ]}
            />
            <ModalInput placeholder="Home Terminal Address*" />
            <ModalSelect
              defaultValue={"default"}
              options={[{ value: "default", label: "CO Driver" }]}
            />
            <ModalSelect
              defaultValue={"default"}
              options={[{ value: "default", label: "Colors" }]}
            />
          </Flex>
          <Flex gap={10}>
            <ModalSelect
              defaultValue={"default"}
              options={[{ value: "default", label: "Address 1" }]}
            />
            <ModalInput placeholder="Address 2" />
            <ModalInput placeholder="City" />
            <ModalInput placeholder="State" />
            <ModalInput placeholder="Zip" />
          </Flex>
          <ModalTextArea placeholder="Notes" />
          <Flex style={{ marginBottom: "30px" }} gap={150}>
            <ModalCheckBox>Allow Personal Conviance</ModalCheckBox>
            <ModalCheckBox>Allow Yard Move</ModalCheckBox>
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
