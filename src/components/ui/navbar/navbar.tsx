import { IoMoonOutline, IoNotificationsOutline } from "react-icons/io5";
import { Header, Title } from "./navbar-styled";

import { Flex } from "antd";
import { CustomInput } from "../custom-input";

interface Props {
  title: string;
}
export const Navbar = ({ title }: Props) => {
  return (
    <Header>
      <Title>{title}</Title>
      <Flex align="center" gap={"20px"}>
        <CustomInput type="search"/>
        <IoMoonOutline size={30} />
        <IoNotificationsOutline size={30} />
      </Flex>
    </Header>
  );
};
