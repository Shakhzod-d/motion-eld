import { useState } from "react";
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
import { Flex, Modal, Table } from "antd";
import { driverColumns, driversData, Main } from "../../utils";
import { Navbar } from "../../components/ui";

export const Drivers = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Main>
        <Navbar title={"Drivers"} />

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
          columns={driverColumns}
          dataSource={driversData}
          id="table"
          style={{ marginTop: "20px" }}
        />
      </Main>
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
