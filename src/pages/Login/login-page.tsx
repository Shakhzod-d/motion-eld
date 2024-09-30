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
import { setLocalStorage } from "../../utils";
import { errorMessage } from "../../utils/message";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
        navigate("/");
        setLocalStorage("token", data?.token);
        // const role: IUserRole = data.role;

        // const isAdmin = role.roleName === "superAdmin";
        // const isService = ["serviceAdmin", "secondServiceAdmin"].includes(role.roleName);
        // const isCompany = ["companyAdmin"].includes(role.roleName);
        // const isLogger = ["logger"].includes(role.roleName)

        // setIsAuth(true);
        // setUserData(data);
        // if (isAdmin) setTimeout(() => historyReplace("/admin/services"), 0);
        // if (isCompany){ setTimeout(() => historyReplace("/main/dashboard"), 0)}
        // if (isCompany){
        //   setLocalStorage("companyId", data.companyId)
        //   historyReplace("/main/dashboard")
        //   window.location.reload();
        // }
        // if (isLogger) setTimeout(() => historyReplace('/admin/all-companies'), 0)
        // if(isLogger){
        //   setLocalStorage('companyId', data.companyId)
        //   historyReplace('/main/log/logs')
        //   window.location.reload();

        // }
        // if (isService) setTimeout(() => historyReplace('/admin/all-companies'), 0)
        // if(isService){
        //   setLocalStorage('serviceId', data.serviceId)
        //   historyReplace('/admin/all-companies')
        //   window.location.reload();

        // }
        console.log("user", data);
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
        <StyledForm autoComplete="off" onFinish={onFinish} name="email_form">
          <img
            src="/logo.svg"
            alt="logo"
            style={{ marginBottom: "20px" }}
          />
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
                message: 'Please enter a valid email address!',
              },
            ]}
          >
            <StyledInput placeholder="Enter login" type="email" />
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
