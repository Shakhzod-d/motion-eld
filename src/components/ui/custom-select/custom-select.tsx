import { StyledSelect } from "./select-styled";
interface Option {
  value: string;
  label: string;
}
interface Props {
  option: Option[];
  change?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  width?: number;
  height?: number;
}
export const CustomSelect = ({ option, width, height }: Props) => {
  return (
    <StyledSelect
      defaultValue={option[0].value}
      options={option}
      width={width}
      height={height}
      
    />
  );
};
