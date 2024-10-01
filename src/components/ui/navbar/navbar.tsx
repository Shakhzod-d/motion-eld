import { IoMoonOutline, IoNotificationsOutline } from "react-icons/io5";
import { Header, Icon, Title } from "./navbar-styled";

import { Flex } from "antd";
import { CustomInput } from "../custom-input";
import { useDispatch } from "react-redux";
import { setDarkMode } from "../../../store/booleans-slice";

interface Props {
  title: string;
  search?: boolean;
}
export const Navbar = ({ title, search = true }: Props) => {
  const dispatch = useDispatch();
  const darkMode = () => {
    dispatch(setDarkMode());
  };
  return (
    <Header>
      <Title>{title}</Title>
      <Flex align="center" gap={"20px"}>
        {search && <CustomInput type="search" />}
        <Icon onClick={darkMode}>
          <IoMoonOutline size={30} />
        </Icon>
        <Icon>
          <IoNotificationsOutline size={30} />
        </Icon>
      </Flex>
    </Header>
  );
};
