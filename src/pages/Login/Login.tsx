import { Button, Form, Input } from "antd";
import styled from "styled-components";
import { LoginData } from "../../types";
const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  background: #19223f;
  padding: 5px;
  gap: 5px;
`;
const FromWrapper = styled.section`
  width: 100%;
  background: #f3f3f4;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Label = styled.label`
  font-size: 14px;
  color: #8c8c9b;
`;
const StyledForm = styled(Form)`
  width: 552px;
  display: flex;
  flex-direction: column;
`;
const BoldText = styled.p`
  font-weight: 700;
  font-size: 16px;
  text-align: center;

  color: #000;
`;
const StyledInput = styled(Input)`
  border-radius: 10px;
  padding: 25px 20px;
  width: 552px;
  height: 69px;
  background: #ffffff;
  border: none;
  outline: none;
  font-weight: 500;
  font-size: 16px;
  color: #000;
  margin-top: 5px;
`;
const Description = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #8c8c9b;
  text-align: center;

  span {
    color: #fc973a;
  }
`;
export const Login = () => {
  const onFinish = (data: LoginData) => {
    console.log(data);
  };
  return (
    <Main>
      <img
        src="../../src/assets/images/loginBg.png"
        alt="photo"
        style={{ width: "50%", borderRadius: "20px" }}
      />
      <FromWrapper>
        <StyledForm autoComplete="off" onFinish={onFinish}>
          <img
            src="../../src/assets/icons/logo.svg"
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
