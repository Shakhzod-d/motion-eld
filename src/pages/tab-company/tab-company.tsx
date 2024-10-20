import { AddBtn, Div, Label, Note, StyleFlex, UploadBtn } from "./styled";
import { TiDownload } from "react-icons/ti";
import { Text } from "../../utils/constants";
import { FaPlus } from "react-icons/fa6";
import { Flex, Form } from "antd";
import { PrimaryBtn } from "../units/units-styled";
import { DefaultBtn } from "../drivers/styled";
import { FormInput } from "../../components/ui";
import useApiMutation from "../../hooks/useApiMutation";
import { errorMessage, successMessage } from "../../utils/message";
import { validatePhoneNumber } from "../../utils/method";

interface CompanyData {
  [key: string]: number | boolean | string;
}
export const TabCompany = () => {
  const companyMutation = useApiMutation("/company", { hideMessage: true });

  // Append the file with the key 'file'import axios from "axios";

  // Fayl yuklash funksiyasi

  const [form] = Form.useForm();

  const handleReset = () => {
    form.resetFields(); // Formani tozalash
  };

  const submit = (data: CompanyData) => {
    const CompanyData = {
      ...data,
      zip: Number(data.zip),
    };

    console.log(CompanyData);

    companyMutation.mutate(CompanyData, {
      onSuccess: (res: unknown) => {
        successMessage("company added");
        handleReset();
      },
      onError: (err) => {
        errorMessage(err?.data.error);
      },
    });
  };

  return (
    <Form style={{ maxWidth: "100%" }} onFinish={submit} form={form}>
      <StyleFlex gap={"small"} align="center">
        <Div>
          <Label>Company Name*</Label>

          <FormInput
            name="companyName"
            bg="#ffffff"
            padding="25px 10px"
            h="69px"
            rules={[
              { required: true, message: "Please input your CompanyName!" },
            ]}
          />
        </Div>
        <Div>
          <Label>USDOT*</Label>
          <FormInput
            name="usdot"
            bg="#ffffff"
            padding="25px 10px"
            h="69px"
            rules={[{ required: true, message: "Please input your Usdot!" }]}
          />
        </Div>
        <Div>
          <Label>Terminal Address*</Label>
          <FormInput
            name="homeTerminalAddress"
            bg="#ffffff"
            padding="25px 10px"
            h="69px"
            rules={[
              {
                required: true,
                message: "Please input your Terminal Address  !",
              },
            ]}
          />
        </Div>
        <AddBtn type="primary">
          <FaPlus />
        </AddBtn>
      </StyleFlex>

      <StyleFlex gap={"small"} align="center">
        <Div>
          <Label>Country</Label>
          <FormInput
            // name="country"
            bg="#ffffff"
            padding="25px 10px"
            h="69px"
            // rules={[{ required: true, message: "Please input your CompanyName!" }]}
          />
        </Div>
        <Div>
          <Label>Status</Label>
          <FormInput
            // name="status"
            bg="#ffffff"
            padding="25px 10px"
            h="69px"
            // rules={[{ required: true, message: "Please input your CompanyName!" }]}
          />
        </Div>
        <Div>
          <Label>Zip</Label>
          <FormInput
            name="zip"
            bg="#ffffff"
            padding="25px 10px"
            h="69px"
            rules={[{ required: true, message: "Please input your Zip!" }]}
            type="number"
          />
        </Div>
        <Div>
          <Label>City</Label>
          <FormInput
            // name="city"
            bg="#ffffff"
            padding="25px 10px"
            h="69px"
            // rules={[{ required: true, message: "Please input your CompanyName!" }]}
          />
        </Div>
      </StyleFlex>

      <StyleFlex gap={"small"} align="center">
        <Div>
          <Label>Address Line 1</Label>
          <FormInput
            name="companyAddress"
            bg="#ffffff"
            padding="25px 10px"
            h="69px"
            rules={[
              {
                required: true,
                message: "Please input your companyAddress !",
              },
            ]}
          />
        </Div>
        <Div>
          <Label>Address Line 2</Label>
          <FormInput
            // name="companyAddress2"
            bg="#ffffff"
            padding="25px 10px"
            h="69px"
            // rules={[{ required: true, message: "Please input your companyAddress2 !" }]}
          />
        </Div>
        <Div>
          <Label>Company Timezone*</Label>
          <FormInput
            name="homeTerminalTimezone"
            bg="#ffffff"
            padding="25px 10px"
            h="69px"
            rules={[
              {
                required: true,
                message: "Please input your homeTerminalTimezone !",
              },
            ]}
          />
        </Div>
        <Div>
          <Label>State</Label>
          <FormInput
            name="state"
            bg="#ffffff"
            padding="25px 10px"
            h="69px"
            rules={[{ required: true, message: "Please input your State !" }]}
          />
        </Div>
      </StyleFlex>

      <StyleFlex gap={"small"} align="center">
        <Div>
          <Label>Start of week</Label>
          <FormInput
            // name="startOfWeek"
            bg="#ffffff"
            padding="25px 10px"
            h="69px"
            // rules={[{ required: true, message: "Please input your homeTerminalTimezone !" }]}
          />{" "}
        </Div>
        <Div>
          <Label>Email</Label>
          <FormInput
            name="mail"
            bg="#ffffff"
            padding="25px 10px"
            h="69px"
            rules={[
              { required: true, message: "Please input your Email !" },
              {
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please enter a valid email address!",
              },
            ]}
          />
        </Div>
        <Div>
          <Label>Password</Label>
          <FormInput
            // name="password"
            bg="#ffffff"
            padding="25px 10px"
            h="69px"

            // rules={[{ required: true, message: "Please input your homeTerminalTimezone !" }]}
          />
        </Div>
        <Div>
          <Label>Phone Number</Label>
          <FormInput
            rules={[{ validator: validatePhoneNumber }]}
            name="phone"
            bg="#ffffff"
            padding="25px 10px"
            h="69px"
            // type="text"
          />
        </Div>
      </StyleFlex>
      <UploadBtn>
        <TiDownload />
        <Text> Upload company logo</Text>
      </UploadBtn>

      <Form.Item
        name={"note"}
        rules={[
          {
            required: true,
            message: "Please input your Phone number !",
          },
        ]}
      >
        <Note placeholder="Note" />
      </Form.Item>
      <Flex justify="end" gap={"middle"}>
        <DefaultBtn onClick={() => handleReset()}>cancel</DefaultBtn>
        <PrimaryBtn
          padding="10px 40px"
          htmlType="submit"
          loading={companyMutation.isLoading}
        >
          Submit
        </PrimaryBtn>
      </Flex>
    </Form>
  );
};
