import { Select } from "antd";
import { Item, StyledSelect } from "./select-styled";
import { FaAngleDown } from "react-icons/fa";
import { Rules } from "../../../types/helper.type";

interface Option {
  id?: number | string;
  label: string|number;
  value: string | boolean | number;
}
interface Props {
  name: string;
  rules?: Rules[];
  h?: string;
  width?: string;
  clr?: string;
  pClr?: string;
  bg?: string;
  placeholder?: string;
  data: Option[];
  value?: string | number | boolean;
}

export const FormSelect = (props: Props) => {
  const { h, rules, width, name, clr, pClr, bg, placeholder, data, value } =
    props;
  return (
    <Item name={name} rules={rules} initialValue={value}>
      <StyledSelect
        suffixIcon={<FaAngleDown />}
        placeholder={placeholder}
        $bg={bg}
        $pClr={pClr}
        $clr={clr}
        $w={width}
        $h={h}
      >
        {data?.map((item,i) => {
          return (
            <Select.Option value={item.value} key={i}>{item.label}</Select.Option>
          );
        })}
      </StyledSelect>
    </Item>
  );
};
