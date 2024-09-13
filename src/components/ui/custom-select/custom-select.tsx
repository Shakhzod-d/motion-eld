import { StyledSelect } from "./select-styled";
interface Option {
  value: string;
  label: string;
}
interface Props {
  option: Option[];
  change?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  width?: string;
  height?: number;
  placeholder?:string
}
export const CustomSelect = ({ option, width, height,placeholder }: Props) => {
  return (
    <StyledSelect
      defaultValue={placeholder}
      options={option}
      width={width}
      height={height}
      
    />
  );
};
