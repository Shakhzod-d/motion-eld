import { Flex, Modal } from "antd";
import { Dispatch, SetStateAction } from "react";
import {
  DefaultBtn,
  ModalInput,
  PrimaryBtn,
} from "../../../pages/units/units-styled";
import { CustomSelect, FormInput, FormSelect } from "../../ui";
import { stateSelect } from "../../../utils/constants";
import { ModalCheckBox, ModalTextArea } from "../units-add-modal/styled";
interface Prop {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
export const DriversModal = ({ open, setOpen }: Prop) => {
  return (
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
          <FormInput
            name="firstName"
            placeholder="First Name*"
            padding="20px 25px"
          />
          <FormInput placeholder="Last name*" name="lastName" />
          <FormInput placeholder="Username*" name="userName" />
          <FormInput placeholder="Email*" type="email" name="username" />
        </Flex>
        <Flex gap={10}>
          <FormInput placeholder="Password*" name="password" type="password" />
          <FormInput placeholder="Phone No*" type="tel" name="phone" />
          <FormSelect
            placeholder="default"
            h="60px"
            data={[{ value: "default", label: "Vehicle ID" }]}
            // width="50%"
            name="VehicleI"
          />
          <FormInput placeholder="Driver's License No*" name="d_license_no" />
        </Flex>
        <Flex gap={10}>
          <FormSelect
            placeholder="Driver's License Issuing State*"
            data={stateSelect}
            name="state"
            h={"70px"}
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
            // onClick={}
            style={{ width: "200px", height: "55px" }}
          >
            Save
          </PrimaryBtn>
        </Flex>
      </Flex>
    </Modal>
  );
};
