
import { CustomSelect } from "../../ui";
import {

  CustomInput,
  StyleFlex,
  TextAria,
} from "../manage-user-modal/modal-styled";
const timezone = [
  {
    label: "Eastern Standard Time (EST)",
    value: "Eastern Standard Time (EST)",
  },
  { label: "Central Standard Time(CST)", value: "Central Standard Time(CST)" },
  {
    label: "Mountain Standard Time (MST)",
    value: "Mountain Standard Time (MST)",
  },
  {
    label: "Pacific Standard Time (PST)",
    value: "Pacific Standard Time (PST)",
  },
];
const country = [
  {
    label: "US",
    value: "US",
  },
  {
    label: "CA",
    value: "CA",
  },
];

const status =[
    {label:"Active",value:"active"},
    {label:"On Hold",value:"On Hold"},
    {label:"Inactive",value:"Inactive"},
    {label:"Suspended",value:"Suspended"},
]
const state =[{value:"ny",label:"NY"}]
export const Details = () => {
  return (
    <>
      <StyleFlex gap={"small"}>
        <CustomInput placeholder="Account Name" />
        <CustomInput placeholder="DOT" />
        <CustomSelect placeholder="Timezone" option={timezone} width="100%" />
        <CustomSelect option={country} width="100%" placeholder="Country" />
      </StyleFlex>
      <StyleFlex gap={"small"}>
        <CustomInput placeholder="Address Line 1" />
        <CustomInput placeholder="Address Line 2" />
        <CustomInput placeholder="Contact phone" />
        <CustomInput placeholder="City" />
      </StyleFlex>
      <StyleFlex gap={"small"}>
        <CustomSelect placeholder="State" option={state} width="100%" />
        <CustomSelect option={status} width="100%" placeholder="Status" />
      </StyleFlex>
      <TextAria placeholder="Note" />
     
    </>
  );
};
