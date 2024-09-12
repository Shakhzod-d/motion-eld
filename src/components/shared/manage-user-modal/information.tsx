import { Checkbox, Flex } from "antd";
import { CustomSelect } from "../../ui";
import {
  Btn,
  CustomFlex,
  CustomInput,
  StyleFlex,
  TextAria,
} from "./modal-styled";
const cycleType = [
  { label: "Cycle Type", value: "cycle" },
  { label: "USA 70/8", value: "usa70/8" },
  { label: "USA 60/7", value: "60" },
  { label: "California 80/8", value: "California" },
  { label: "Canada 120/14", value: "Canada 120/14" },
];
const restart = [
  { label: "Restart", value: "restart" },
  { label: "34", value: "34" },
  { label: "24", value: "24" },
];
export const Information = () => {
  return (
    <>
      <StyleFlex gap={"small"}>
        <CustomSelect
          option={[{ value: "driver", label: "Driver" }]}
          width="100%"
        />
        <CustomSelect
          option={[{ value: "status", label: "Status" }]}
          width="100%"
        />
      </StyleFlex>
      <StyleFlex gap={"small"}>
        <CustomInput placeholder="First Name*" />
        <CustomInput placeholder="Lats Name*" />
        <CustomInput placeholder="Username*" />
        <CustomInput placeholder="Email" />
      </StyleFlex>
      <StyleFlex gap={"small"}>
        <CustomInput placeholder="Password*" />
        <CustomInput placeholder="Phone No" />
        <CustomSelect
          option={[{ value: "vehicle", label: "Vehicle ID" }]}
          width="100%"
          height={69}
        />
        <CustomInput placeholder="Driver's License No*" />
      </StyleFlex>
      <StyleFlex gap={"small"}>
        <CustomSelect
          option={[
            { value: "drivers", label: "Driver's License Issuing State*" },
          ]}
          width="100%"
          height={69}
        />
        <CustomInput placeholder="Home Terminal Address*" />
        <CustomSelect
          option={[{ value: "coDriver", label: "Co-Driver" }]}
          width="100%"
          height={69}
        />
      </StyleFlex>
      <StyleFlex gap={"small"}>
        <CustomSelect
          option={[{ value: "address1", label: "Address 1" }]}
          width="100%"
          height={69}
        />
        <CustomInput placeholder="Address 2" />
        <CustomInput placeholder="City" />
        <CustomInput placeholder="State" />
        <CustomInput placeholder="Zip" />
      </StyleFlex>
      <StyleFlex gap={"small"}>
        <CustomSelect option={cycleType} width="100%" height={69} />

        <CustomSelect option={restart} width="100%" height={69} />
      </StyleFlex>
      <TextAria placeholder="Note" />
      <StyleFlex gap={"140px"}>
        <Checkbox> Allow Personal Conviance</Checkbox>
        <Checkbox> Allow Yard Move</Checkbox>
      </StyleFlex>
      <CustomFlex justify="end">
        <Flex gap={"small"}>
          <Btn type="primary">Close</Btn>

          <Btn type="primary" $type="add">Add</Btn>
        </Flex>
      </CustomFlex>
    </>
  );
};
