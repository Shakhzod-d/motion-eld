import { Flex, Form, Modal } from "antd";
import { Dispatch, SetStateAction } from "react";
import {
  DefaultBtn,
  ModalInput,
  PrimaryBtn,
} from "../../../pages/units/units-styled";
import { CustomSelect, FormInput, FormSelect } from "../../ui";
import { stateSelect } from "../../../utils/constants";
import { ModalCheckBox, ModalTextArea } from "../units-add-modal/styled";
import { validatePhoneNumber } from "../../../utils/method";

import { Obj } from "../../../types/helper.type";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
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
  // const driversMutation = useApiMutation("/driver", { hideMessage: true });
  const submit = (data: Obj) => {
    console.log(data);

    handleReset();
    // const DriverData = {
    //   ...data,
    //   organization: "Unity",
    // };
    // driversMutation.mutate(DriverData, {
    //   onSuccess: (res: unknown) => {
    //     console.log(res);
    //   },
    //   onError: (err) => {
    //     console.log(err);
    //   },
    // });
  };
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
      <Form onFinish={submit} form={form}>
        <Flex vertical gap={10}>
          <Flex gap={10}>
            <FormInput
              name="firstName"
              placeholder="First Name*"
              padding="20px 25px"
              rules={[
                { required: true, message: "Please input your FirstName!" },
              ]}
            />
            <FormInput
              placeholder="Last name*"
              name="lastName"
              rules={[
                { required: true, message: "Please input your Last name!" },
              ]}
            />
            <FormInput
              placeholder="Username*"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            />
            <FormInput
              placeholder="Email*"
              type="email"
              name="email"
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
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            />
            <FormInput
              placeholder="Phone No*"
              type="tel"
              name="phone"
              rules={[{ validator: validatePhoneNumber }]}
            />
            <FormSelect
              placeholder="default"
              h="60px"
              data={vehicleId}
              // width="50%"
              name="VehicleId"
              rules={[
                { required: true, message: "Please input your Vehicleid!" },
              ]}
            />
            <FormInput
              placeholder="Driver's License No*"
              name="driverLicense"
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
              h={"70px"}
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
              rules={[
                { required: true, message: "Please homeTerminalAddress " },
              ]}
            />
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
              htmlType="submit"
              style={{ width: "200px", height: "55px" }}
            >
              Save
            </PrimaryBtn>
          </Flex>
        </Flex>
      </Form>
    </Modal>
  );
};
