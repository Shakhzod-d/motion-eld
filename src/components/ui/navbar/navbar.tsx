import { IoNotificationsOutline } from "react-icons/io5";
import { Header, Title } from "./navbar-styled";
interface Props {
  title: string;
}
export const Navbar = ({ title }: Props) => {
  return (
    <Header>
      <Title>{title}</Title>
      <div>
        <IoNotificationsOutline size={30} />
      </div>
    </Header>
  );
};
