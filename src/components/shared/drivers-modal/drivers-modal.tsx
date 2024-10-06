import { Flex, Modal } from "antd";
import { Dispatch, SetStateAction } from "react";
import {
  DefaultBtn,
  ModalInput,
  PrimaryBtn,
} from "../../../pages/units/units-styled";
import { CustomSelect } from "../../ui";
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
            placeholder="Driver's License Issuing State*"
            option={stateSelect}
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
  );
};
