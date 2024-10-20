import { FaAngleDown } from "react-icons/fa6";
import { StyledSelect } from "./select-styled";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { GlobalStyle } from "../form-select/select-styled";
interface Option {
  value: string | number;
  label: string;
}
interface Props {
  option: Option[];
  change?: (value: string |number |unknown) => void;
  width?: string;
  height?: number;
  placeholder?: string;
  color?: string;
  dValue?: string | number|null;
}
export const CustomSelect = ({
  option,
  width,
  height,
  placeholder,
  dValue,
  color,
  change,
}: Props) => {
  const darkMode = useSelector((state: RootState) => state.booleans.darkMode);
  return (
    <>
      <GlobalStyle />
      <StyledSelect
        placeholder={placeholder}
        defaultValue={dValue}
        options={option}
        width={width}
        height={height}
        color={color}
        onChange={change}
        suffixIcon={<FaAngleDown color={darkMode ? "#fff" : "#000"} />}
      />
    </>
  );
};
