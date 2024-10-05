import { Rules } from "../../../types/helper.type";
import { Item, StyledInput } from "./input-styled";

interface Props {
  name: string;
  rules?: Rules[];
  placeholder?: string;
  width?: string;
  padding?: string;
  clr?: string;
  pClr?: string;
  bg?: string;
  type?: string;
}
export const FormInput = (prop: Props) => {
  const { name, rules, placeholder, width, padding, clr, pClr, bg, type } =
    prop;
  return (
    <Item name={name} rules={rules ? rules : []}>
      <StyledInput
        placeholder={placeholder}
        $w={width}
        $p={padding}
        $clr={clr}
        $pClr={pClr}
        $bg={bg}
        type={type}
      />
    </Item>
  );
};
