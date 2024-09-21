import { IoNotificationsOutline } from "react-icons/io5";
import { Header, Title } from "./navbar-styled";
import { User } from "../../shared/sidebar/sidebar-styled";
import { Flex } from "antd";
interface Props {
  title: string;
}
export const Navbar = ({ title }: Props) => {
  return (
    <Header>
      <Title>{title}</Title>
      <Flex align="center" gap={"20px"}>
        <IoNotificationsOutline size={30} />
        <User className="light user-profile" background="#FFF" color="#000">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="41"
            height="42"
            viewBox="0 0 41 42"
            fill="none"
          >
            <circle cx="20.5" cy="21.3734" r="20.5" fill="#F80638" />
            <path
              d="M17.1211 27.8734H14.1719V13.7816H17.1211V20.2074H17.209L22.502 13.7816H25.7832L20.5684 20.0316L26.1445 27.8734H22.6191L18.4395 21.9847L17.1211 23.5668V27.8734Z"
              fill="white"
            />
          </svg>
          <div>
            <h2>
              Karavan logistics <br /> group LLC
            </h2>
          </div>
        </User>
      </Flex>
    </Header>
  );
};
