import { Button, Form } from "antd";
import { LoginData } from "../../types";
import {
  BoldText,
  Description,
  FromWrapper,
  Label,
  Main,
  StyledForm,
  StyledInput,
} from "./login-styled";

export const Login = () => {
  const onFinish = (values: unknown) => {
    const data = values as LoginData;
    console.log(data);
  };
  return (
    <Main>
      <img
        src="/images/loginBg.png"
        alt="photo"
        style={{ width: "50%", borderRadius: "20px" }}
      />
      <FromWrapper>
        <StyledForm autoComplete="off" onFinish={onFinish}>
          <img
            src="/logo.svg"
            alt="logo"
            style={{ marginBottom: "20px" }}
          />
          <Label htmlFor="">Login</Label>
          <Form.Item
            name={"login"}
            rules={[{ required: true, message: "Please input your login!" }]}
          >
            <StyledInput placeholder="Inter login" type="email" />
          </Form.Item>
          <Label htmlFor="">Password</Label>
          <Form.Item
            name={"password"}
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <StyledInput
              placeholder="Inter password"
              type="password"
              style={{ marginBottom: "20px" }}
            />
          </Form.Item>
          <Form.Item name={"sas"}>
            <Button
              htmlType="submit"
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
