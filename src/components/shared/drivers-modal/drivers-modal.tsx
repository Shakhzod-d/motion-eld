import { Flex, Form, Modal } from "antd";
import { Dispatch, SetStateAction } from "react";
import {
  DefaultBtn,
  ModalInput,
  PrimaryBtn,
} from "../../../pages/units/units-styled";
import { CustomSelect, FormInput, FormSelect } from "../../ui";
import { CustomModal, stateSelect } from "../../../utils/constants";
import { ModalCheckBox, ModalTextArea } from "../units-add-modal/styled";
import { validatePhoneNumber } from "../../../utils/method";

import { Obj } from "../../../types/helper.type";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import useApiMutation from "../../../hooks/useApiMutation";
interface Prop {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const DriversModal = ({ open, setOpen }: Prop) => {
  const [form] = Form.useForm();

  const handleReset = () => {
    form.resetFields(); // Formani tozalash
    setOpen(false);
  };

  const vehicleId = useSelector(
    (state: RootState) => state.booleans.driverSelect
  );
  const driversMutation = useApiMutation("/driver", { hideMessage: true });
  const submit = (data: Obj) => {
    // handleReset();
    const DriverData = {
      ...data,
      organization: "Unity",
    };
    driversMutation.mutate(DriverData, {
      onSuccess: (res: unknown) => {
        console.log(res);
      },
      onError: (err) => {
        console.log(err);
      },
    });
  };
  return (
    <CustomModal
      centered
      open={open}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
      width={"95%"}
      style={{ maxWidth: "1515px" }}
    >
      <h2 className="modal-title">Create Drivers</h2>
      <Form onFinish={submit} form={form}>
        <Flex vertical gap={10}>
          <Flex gap={10}>
            <FormInput
              name="firstName"
              placeholder="First Name*"
              padding="20px 25px"
              h="70px"
              rules={[
                { required: true, message: "Please input your FirstName!" },
              ]}
            />
            <FormInput
              placeholder="Last name*"
              name="lastName"
              h="70px"
              rules={[
                { required: true, message: "Please input your Last name!" },
              ]}
            />
            <FormInput
              placeholder="Username*"
              name="username"
              h="70px"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            />
            <FormInput
              placeholder="Email*"
              type="email"
              name="email"
              h="70px"
              rules={[
                { required: true, message: "Please input your email!" },
                {
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Please enter a valid email address!",
                },
              ]}
            />
          </Flex>
          <Flex gap={10}>
            <FormInput
              placeholder="Password*"
              name="password"
              type="password"
              h="70px"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            />
            <FormInput
              placeholder="Phone No*"
              type="tel"
              name="phone"
              h="70px"
              rules={[{ validator: validatePhoneNumber }]}
            />
            <FormSelect
              placeholder="Vehicle Id"
              h="70px"
              data={vehicleId}
              // width="50%"
              name="VehicleId"
              rules={[
                { required: true, message: "Please input your VehicleId!" },
              ]}
            />
            <FormInput
              placeholder="Driver's License No*"
              name="driverLicense"
              h="70px"
              rules={[
                { required: true, message: "Please Driver's License No " },
              ]}
            />
          </Flex>
          <Flex gap={10}>
            <FormSelect
              placeholder="Driver's License Issuing State*"
              data={stateSelect}
              name="driverLicenseIssuingState"
              h="70px"
              rules={[
                {
                  required: true,
                  message: "Please Driver's License Issuing State ",
                },
              ]}
            />
            <FormInput
              placeholder="Home Terminal Address*"
              name="homeTerminalAddress"
              h="70px"
              rules={[
                { required: true, message: "Please homeTerminalAddress " },
              ]}
            />
            <FormSelect
              placeholder={"CO Driver"}
              data={[{ value: "default", label: "CO Driver" }]}
              h="70px"
            />
            <FormSelect
              placeholder={"Colors"}
              data={[{ value: "default", label: "Colors" }]}
              width=""
              h="70px"
            />
          </Flex>
          <Flex gap={10}>
            <FormSelect
              placeholder={"Address 1"}
              data={[{ value: "default", label: "Address 1" }]}
              h="70px"
            />
            <FormInput placeholder="Address 2"  h="70px"/>
            <FormInput placeholder="City"  h="70px"/>
            <FormInput placeholder="State"  h="70px"/>
            <FormInput placeholder="Zip"  h="70px"/>
          </Flex>
          <Form.Item
            name={"notes"}
            rules={[{ required: true, message: "Please input your notes!" }]}
          >
            <ModalTextArea placeholder="Notes" />
          </Form.Item>
          <Flex style={{ marginBottom: "30px" }} gap={150}>
            <ModalCheckBox>Allow Personal Conviance</ModalCheckBox>
            <ModalCheckBox>Allow Yard Move</ModalCheckBox>
          </Flex>
          <Flex justify="end" gap={"10px"}>
            <DefaultBtn
              onClick={handleReset}
              style={{ width: "200px", height: "55px" }}
            >
              Close
            </DefaultBtn>
            <PrimaryBtn
              // onClick={}
              loading={driversMutation.isLoading}
              htmlType="submit"
              style={{ width: "200px", height: "55px" }}
            >
              Save
            </PrimaryBtn>
          </Flex>
        </Flex>
      </Form>
    </CustomModal>
  );
};
