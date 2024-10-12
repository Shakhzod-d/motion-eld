import { Rules } from "../../../types/helper.type";
import { Item, StyledInput } from "./input-styled";

interface Props {
  name?: string;
  rules?: Rules[];
  placeholder?: string;
  width?: string;
  padding?: string;
  clr?: string;
  pClr?: string;
  bg?: string;
  type?: string;
  h?: string;
  value?: string | number | undefined;
  change?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}
export const FormInput = (prop: Props) => {
  const {
    name,
    rules,
    placeholder,
    width,
    padding,
    clr,
    pClr,
    bg,
    type,
    h,
    change,
    disabled,
  } = prop;
  return (
    <Item name={name} rules={rules ? rules : []}>
      <StyledInput
        onChange={change}
        disabled={disabled}
        placeholder={placeholder}
        $w={width}
        $p={padding}
        $clr={clr}
        $pClr={pClr}
        $bg={bg}
        $h={h}
        type={type}
      />
    </Item>
  );
};
