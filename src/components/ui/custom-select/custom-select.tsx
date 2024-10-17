import { FaAngleDown } from "react-icons/fa6";
import { StyledSelect } from "./select-styled";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
interface Option {
  value: string;
  label: string;
}
interface Props {
  option: Option[];
  change?: (value: unknown) => void;
  width?: string;
  height?: number;
  placeholder?: string;
  color?: string;
}
export const CustomSelect = ({
  option,
  width,
  height,
  placeholder,
  color,
  change,
}: Props) => {
  const darkMode = useSelector((state: RootState) => state.booleans.darkMode);
  return (
    <StyledSelect
      defaultValue={placeholder}
      options={option}
      width={width}
      height={height}
      color={color}
      onChange={change}
      suffixIcon={<FaAngleDown color={darkMode ? "#fff" : "#000"} />}
    />
  );
};
