import { Button, Form, message } from "antd";
import { ILoginData, LoginData } from "../../types";
import {
  BoldText,
  Description,
  FromWrapper,
  Label,
  Main,
  StyledForm,
  StyledInput,
} from "./login-styled";
import useApiMutation from "../../hooks/useApiMutation";
import { getLocalStorage, setLocalStorage } from "../../utils";
import { errorMessage } from "../../utils/message";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../utils/dispatch";
export const Login = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const error = (message: string) => {
    messageApi.open({
      type: "error",
      content: message,
    });
  };
  const [loading, setLoading] = useState<boolean>(false);
  const loginMutation = useApiMutation("/user/login", { hideMessage: true });
  const onFinish = (values: unknown) => {
    setLoading(true);
    const data = values as LoginData;

    loginMutation.mutate(data, {
      onSuccess: (res: ILoginData) => {
        setLoading(false);
        const { data } = res;
        setLocalStorage("token", data?.token);
        setUser(data);
        setLocalStorage("roleId", data?.role?.roleId);
        // setLocalStorage("companyId", "66fcf8f52ccf4ba8e6b32c36");
        if (!getLocalStorage("company")) {
          navigate("/company");
        } else {
          navigate("/");
        }
      },
      onError: (err) => {
        errorMessage(err?.data.error);

        setLoading(false);
        error(err.message);
      },
    });
  };
  return (
    <Main>
      <img
        src="/images/loginBg.png"
        alt="photo"
        style={{ width: "50%", borderRadius: "20px" }}
      />
      {contextHolder}
      <FromWrapper>
        <StyledForm autoComplete="off" onFinish={onFinish}>
          <img src="/logo.svg" alt="logo" style={{ marginBottom: "20px" }} />
          <Label htmlFor="">Login</Label>
          <Form.Item
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
            <StyledInput placeholder="Enter login" type="" />
          </Form.Item>
          <Label htmlFor="">Password</Label>
          <Form.Item
            name={"password"}
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <StyledInput
              placeholder="Enter password"
              type="password"
              style={{ marginBottom: "20px" }}
            />
          </Form.Item>
          <Form.Item>
            <Button
              htmlType="submit"
              loading={loading}
              style={{
                width: "552px",
                background: "#FC973A",
                color: "#fff",
                height: "60px",
                marginBottom: "5px",
              }}
            >
              Create
            </Button>
          </Form.Item>
          <BoldText>Forgot password?</BoldText>
          <Description>
            Don't have an account? <span>Create one now</span>
          </Description>
        </StyledForm>
      </FromWrapper>
    </Main>
  );
};
