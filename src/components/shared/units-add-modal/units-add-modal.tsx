import { Flex, Form, Modal } from "antd";
import { ModalCheckBox, ModalTextArea, ModalTitle } from "./styled";
import { DefaultBtn, PrimaryBtn } from "../../../pages/units/units-styled";
import { FormInput, FormSelect } from "../../ui";
import { Dispatch, SetStateAction } from "react";
import {
  fuelType,
  makesState,
  models,
  stateSelect,
  yearState,
} from "../../../utils/constants";
import useApiMutation from "../../../hooks/useApiMutation";
interface Prop {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
interface Data {
  [key: string]: string | number | boolean;
}

export const UnitsAddModal = ({ open, setOpen }: Prop) => {
  const unitsMutation = useApiMutation("/vehicle", { hideMessage: true });
  const submit = (data: Data) => {
    const unitsData = {
      make: data.make,
      model: data.model,
      vin: data.vin,
      unit: data.unit,
      year: data.year,
      licensePlateNo: data.licensec,
      fuelType: data.fuel_type,
      notes: data.notes,
    };
    unitsMutation.mutate(unitsData, {
      onSuccess: (res: unknown) => {
        console.log(res);
      },
      onError: (err) => {
        console.log(err);
      },
    });
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
              name="make"
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
              name="model"
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
          <Form.Item name={"notes"}>
            <ModalTextArea placeholder="Notes" />
          </Form.Item>
          <Flex vertical>
            <ModalCheckBox>Enter Vin Manually</ModalCheckBox>
            <FormInput placeholder="Type" name="vin" />
          </Flex>
          <Flex vertical>
            <ModalCheckBox>
              Get Automatically from ELD ( recommended )
            </ModalCheckBox>
            <FormInput placeholder="Type" name="unit" />
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
