import { Flex, Form, Modal } from "antd";
import { ModalCheckBox, ModalTextArea, ModalTitle } from "./styled";
import {
  DefaultBtn,
  ModalInput,
  PrimaryBtn,
} from "../../../pages/units/units-styled";
import { FormInput, FormSelect } from "../../ui";
import { Dispatch, SetStateAction } from "react";
import {
  fuelType,
  makesState,
  models,
  stateSelect,
  yearState,
} from "../../../utils/constants";
interface Prop {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
interface Data {
  [key: string]: string | number | boolean;
}
export const UnitsAddModal = ({ open, setOpen }: Prop) => {
  const submit = (data: Data) => {
    console.log(data);
  };
  return (
    <Modal
      centered
      open={open}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
      width={1000}
    >
      <ModalTitle>Create Vehicle</ModalTitle>

      <Flex vertical gap={10}>
        <Form onFinish={submit}>
          <Flex justify="space-between" gap="10px">
            <FormInput
              placeholder="Vehicle ID"
              name="vehicle_id"
              rules={[
                {
                  required: true,
                  message: "Please input your Vehicle ID",
                },
              ]}
            />
            <FormSelect
              placeholder={"Makes"}
              rules={[
                {
                  required: true,
                  message: "Please input your Makes",
                },
              ]}
              pClr="#000"
              data={makesState}
              h={"60px"}
              name="makes"
            />
          </Flex>
          <Flex justify="space-between" gap="10px">
            <FormSelect
              placeholder={"Models"}
              rules={[
                {
                  required: true,
                  message: "Please input your Models",
                },
              ]}
              data={models}
              h={"60px"}
              name="models"
            />

            <FormInput placeholder="Licensec Plate No" name="licensec" />
          </Flex>
          <Flex justify="space-between" gap="10px">
            <FormSelect
              placeholder={"License Plate Issuing State"}
              data={stateSelect}
              h={"60px"}
              name="licensec_state"
              rules={[
                {
                  required: true,
                  message: "License Plate Issuing State",
                },
              ]}
            />
            <FormSelect
              placeholder={"Year"}
              data={yearState}
              h={"60px"}
              name="year"
              rules={[
                {
                  required: true,
                  message: "Please input your Year",
                },
              ]}
            />
          </Flex>
          <Flex>
            <FormSelect
              placeholder={"fuel type"}
              data={fuelType}
              h={"60px"}
              name="fuel_type"
              rules={[
                {
                  required: true,
                  message: "Please input your Fuel type",
                },
              ]}
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
            <ModalInput
              placeholder="Type"
              style={{ width: "100%", marginBottom: "45px" }}
            />
          </Flex>
          <Flex justify="end" gap={"10px"}>
            <DefaultBtn
              onClick={() => setOpen(false)}
              style={{ width: "200px", height: "55px" }}
            >
              Close
            </DefaultBtn>

            <PrimaryBtn
              style={{ width: "200px", height: "55px" }}
              htmlType="submit"
            >
              Save
            </PrimaryBtn>
          </Flex>
        </Form>
      </Flex>
    </Modal>
  );
};
