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
import { RuleObject } from "antd/es/form";
import { errorMessage, successMessage } from "../../../utils/message";
interface Prop {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
interface Data {
  [key: string]: string | boolean;
}

export const UnitsAddModal = ({ open, setOpen }: Prop) => {
  const unitsMutation = useApiMutation("/vehicle", { hideMessage: true });

  const [form] = Form.useForm();

  const handleReset = () => {
    form.resetFields(); // Formani tozalash
    setOpen(false);
  };
  const validateLength = (_: RuleObject, value: string) => {
    if (value && value.length === 17) {
      return Promise.resolve();
    }
    return Promise.reject(
      new Error("The input must be exactly 17 characters long!")
    );
  };

  //--------------submit
  const submit = (data: Data) => {
    unitsMutation.mutate(data, {
      onSuccess: (res: unknown) => {
        console.log(res);

        successMessage("vehicle created added");
        handleReset();
      },
      onError: (err) => {
        errorMessage(`${err.data.message}  (${err.data.data})`);
      },
    });
  };
  //--------------submit end
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
        <Form onFinish={submit} form={form}>
          <Flex justify="space-between" gap="10px">
            <FormInput
              placeholder="Vehicle ID"
              // name="vehicle_id"
              disabled={true}
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

            <FormInput
              placeholder="Licensec Plate No"
              name="licensePlateNo"
              rules={[
                {
                  required: true,
                  message: "Please input your Licensec Plate No",
                },
              ]}
            />
          </Flex>

          <Flex justify="space-between" gap="10px">
            <FormSelect
              placeholder={"License Plate Issuing State"}
              data={stateSelect}
              h={"60px"}
              // name="licensec_state"
              // rules={[
              //   {
              //     required: true,
              //     message: "License Plate Issuing State",
              //   },
              // ]}
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
              name="fuelType"
              rules={[
                {
                  required: true,
                  message: "Please input your Fuel type",
                },
              ]}
            />
          </Flex>

          <Form.Item
            name={"notes"}
            rules={[
              {
                required: true,
                message: "Please input your notes",
              },
            ]}
          >
            <ModalTextArea placeholder="Notes" />
          </Form.Item>

          <Flex vertical>
            <ModalCheckBox>Enter Vin Manually</ModalCheckBox>
            <FormInput
              placeholder="Type"
              name="vin"
              rules={[
                {
                  required: true,
                  message: "Please input 17 characters!",
                },
                {
                  validator: validateLength,
                },
              ]}
            />
          </Flex>

          <Flex vertical>
            <ModalCheckBox>
              Get Automatically from ELD ( recommended )
            </ModalCheckBox>
            <FormInput
              placeholder="Type"
              name="unit"
              rules={[
                {
                  required: true,
                  message: "Please input your uint",
                },
              ]}
            />
          </Flex>

          <Flex justify="end" gap={"10px"}>
            <DefaultBtn
              onClick={handleReset}
              style={{ width: "200px", height: "55px" }}
            >
              Close
            </DefaultBtn>

            <PrimaryBtn
              style={{ width: "200px", height: "55px" }}
              htmlType="submit"
              loading={unitsMutation.isLoading}
            >
              Save
            </PrimaryBtn>
          </Flex>
        </Form>
      </Flex>
    </Modal>
  );
};
