import { useState } from "react";
import {
  ModalCheckBox,
  ModalInput,
  ModalSelect,
  ModalTextArea,
  PrimaryBtn,
  TopContainer,
} from "../units/units-styled";
import { Flex, Modal } from "antd";
import { driverColumns, driversData, Main } from "../../utils";
import { CustomSelect, Navbar } from "../../components/ui";
import { CustomTable } from "../../components/shared";
import { BtnWrap, ActiveBtn, DefaultBtn } from "./styled";

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

        <BtnWrap>
          <ActiveBtn>Vehicle</ActiveBtn>
          <DefaultBtn>Deactivated</DefaultBtn>
        </BtnWrap>
        <CustomTable columns={driverColumns} data={driversData} />
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
            <CustomSelect 
              placeholder="default"
              option={[{ value: "default", label: "Vehicle ID" }]}
              width="50%"
            />
            <ModalInput placeholder="Driver's License No*" />
          </Flex>
          <Flex gap={10}>
            <CustomSelect
              placeholder="default"
              option={[
                { value: "default", label: "Driver's License Issuing State*" },
              ]}
              width="50%"
              height={70}
            />
            <ModalInput placeholder="Home Terminal Address*" />
            <CustomSelect
              placeholder={"default"}
              option={[{ value: "default", label: "CO Driver" }]}
              width="50%"
              height={70}
            />
            <CustomSelect
              placeholder={"default"}
              option={[{ value: "default", label: "Colors" }]}
              width="50%"
              height={70}
            />
          </Flex>
          <Flex gap={10}>
            <CustomSelect
              placeholder={"default"}
              option={[{ value: "default", label: "Address 1" }]}
              width="50%"
              height={70}
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
