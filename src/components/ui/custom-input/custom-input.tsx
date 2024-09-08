import { AiOutlineSearch } from "react-icons/ai";
import { StyledInput } from "./input-styled";
interface Props {
  type?: string;
  change?:  (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const CustomInput = ({ type, change }: Props) => {
  return (
    <StyledInput
      prefix={type == "search" ? <AiOutlineSearch size={20} /> : null}
      onChange={change}
    />
  );
};
