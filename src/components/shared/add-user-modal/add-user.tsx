import { Flex, Form, Modal } from "antd";
import { Text } from "../../../utils/constants";
import { ModalInput, PrimaryBtn } from "../../../pages/units/units-styled";

import { DefaultBtn } from "../../../pages/drivers/styled";
import { Dispatch, SetStateAction } from "react";
import { Item } from "./add-user-styled";
import { getLocalStorage } from "../../../utils";
import useApiMutation from "../../../hooks/useApiMutation";
interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
export const AddUser = ({ open, setOpen }: Props) => {
  const UserMutation = useApiMutation("/user", { hideMessage: true });

  //   const roleSelect = [
  //     { value: "superAdmin", label: "superAdmin" },
  //     { value: "serviceAdmin", label: "serviceAdmin" },
  //     { value: "loggerAdmin", label: "loggerAdmin" },
  //     { value: "companyAdmin", label: "companyAdmin" },
  //   ];
  interface User {
    [key: string]: string;
  }
  const roleId = getLocalStorage("roleId");
  const submit = (data: User) => {
    console.log(data);
    const userData = {
      firstName: data.fistName,
      lastName: data.lastName,
      role: {
        roleName: data.role,
        roleId: roleId,
      },
      phone: data.phone,
      email: data.email,
      password: data.password,
    };
    UserMutation.mutate(userData, {
      onSuccess: (res: unknown) => {
        setOpen(false);
      },
      onError: (err) => {
        console.log(err);
        // errorMessage(err?.data.error);
        // setLoading(false);
        // error(err.message);
      },
    });
  };
  return (
    <Modal width={"70%"} open={open} onCancel={() => setOpen(false)}>
      <Text $mb="20px" size={30}>
        Add user
      </Text>

      <Form onFinish={submit}>
        <Flex gap={"20px"} vertical={true}>
          <Flex gap={"20px"}>
            <Item
              name={"fistName"}
              rules={[
                { required: true, message: "Please input your fistName!" },
              ]}
            >
              <ModalInput placeholder="FirstName" width="100%" />
            </Item>
            <Item
              name={"lastName"}
              rules={[
                { required: true, message: "Please input your lastName!" },
              ]}
            >
              <ModalInput placeholder="LastName" width="100%" />
            </Item>
            <Item
              name={"role"}
              rules={[{ required: true, message: "Please input your role!" }]}
            >
              <ModalInput placeholder="role" width="100%" />
              {/* <CustomSelect
                option={roleSelect}
                width="500px"
                height={80}
                placeholder="Role"
              /> */}
            </Item>
          </Flex>

          <Flex gap={"20px"}>
            <Item
              name={"phone"}
              rules={[{ required: true, message: "Please input your phone!" }]}
            >
              <ModalInput placeholder="Phone" width="100%" />
            </Item>
            <Item
              name={"email"}
              rules={[
                {
                  required: true,
                  message: "Please input your login!",
                },
                {
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Please enter a valid email address!",
                },
              ]}
            >
              <ModalInput placeholder="email" width="100%" />
            </Item>
            <Item
              name={"password"}
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <ModalInput placeholder="password" type="password" width="100%" />
            </Item>
          </Flex>
          <Flex justify="end" gap={"20px"}>
            <DefaultBtn
              style={{ width: "200px", height: "55px" }}
              onClick={() => setOpen(false)}
            >
              Close
            </DefaultBtn>
            <Form.Item name={"lastName"}>
              <PrimaryBtn
                padding="15px 50px"
                loading={UserMutation.isLoading}
                htmlType="submit"
              >
                Add
              </PrimaryBtn>
            </Form.Item>
          </Flex>
        </Flex>
      </Form>
    </Modal>
  );
};
