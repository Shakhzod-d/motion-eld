import { AiOutlineSearch } from "react-icons/ai";
import { StyledInput } from "./input-styled";
interface Props {
  type?: string;
  change?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  width?: string | "";
  height?: number;
  margin?: string;
}
export const CustomInput = ({ type, change, width, margin }: Props) => {
  return (
    <StyledInput
      $width={width}
      $margin={margin}
      prefix={type == "search" ? <AiOutlineSearch size={20} /> : null}
      onChange={change}
    />
  );
};
