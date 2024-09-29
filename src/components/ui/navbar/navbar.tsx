import { IoMoonOutline, IoNotificationsOutline } from "react-icons/io5";
import { Header, Icon, Title } from "./navbar-styled";

import { Flex } from "antd";
import { CustomInput } from "../custom-input";

interface Props {
  title: string;
  search?: boolean;
}
export const Navbar = ({ title, search = true }: Props) => {
  return (
    <Header>
      <Title>{title}</Title>
      <Flex align="center" gap={"20px"}>
        {search && <CustomInput type="search" />}
        <Icon>
          <IoMoonOutline size={30} />
        </Icon>
        <Icon>
          <IoNotificationsOutline size={30} />
        </Icon>
      </Flex>
    </Header>
  );
};
