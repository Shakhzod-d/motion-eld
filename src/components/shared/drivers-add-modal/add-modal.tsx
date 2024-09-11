import {Modal, Radio } from "antd";
import { BlueBtn, Card, CustomBtn, CustomFlex, CustomInput } from "./styled";
import { BsTruck } from "react-icons/bs";
import { Text } from "../../../utils/constants";
import { FaPowerOff } from "react-icons/fa";
import { TbMoonStars } from "react-icons/tb";
import { GrUserAdmin } from "react-icons/gr";
import { IoLayersOutline } from "react-icons/io5";
import { Dispatch, SetStateAction } from "react";
const arr: string[] = [
  "Login",
  "Logout",
  "Power up",
  "Power off",
  "Intermediate",
];
interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}
export const DriversAddModal = ({ open, setOpen }: Props) => {
  return (
    <Modal
      width={"985px"}
      open={open}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
    >
      <CustomFlex gap={"middle"} align="center">
        <Card>
          <BsTruck size={35} />
          <Text size={20}>On</Text>
        </Card>
        <Card>
          <TbMoonStars size={35} />
          <Text size={20}>Sb</Text>
        </Card>
        <Card>
          <FaPowerOff size={30} />
          <Text size={20}>Off</Text>
        </Card>
        <Card>
          <IoLayersOutline size={30} />
          <Text size={20}>Ym</Text>
        </Card>
        <Card>
          <GrUserAdmin size={30} />
          <Text size={20}>Pc</Text>
        </Card>
      </CustomFlex>
      <CustomFlex gap={"middle"} align="center">
        {arr.map((item, index) => (
          <Card height={49}>
            <Text key={index}>{item}</Text>
          </Card>
        ))}
      </CustomFlex>
      <CustomFlex justify="end">
        <Card height={49}>
          <Text>Duplicate</Text>
        </Card>{" "}
        <Card height={49}>
          <Text>Clear Form</Text>
        </Card>
      </CustomFlex>
      <CustomFlex gap={"small"}>
        <CustomInput placeholder="Form" />
        <CustomInput value={"05:13:56 AM"} />
      </CustomFlex>
      <CustomFlex gap={"small"}>
        <CustomInput placeholder="Lat" />
        <CustomInput placeholder="Lng" />
        <BlueBtn>Get location</BlueBtn>
      </CustomFlex>
      <CustomFlex gap={"small"}>
        <CustomInput placeholder="Location name" />

        <BlueBtn>Get Coordinates</BlueBtn>
      </CustomFlex>
      <CustomFlex gap={"small"}>
        <CustomInput placeholder="Odometer" />
      </CustomFlex>
      <CustomFlex gap={"small"}>
        <CustomInput placeholder="Eng. hours" />
      </CustomFlex>
      <CustomFlex gap={"small"}>
        <CustomInput placeholder="Note" />

        <BlueBtn>Add quickly</BlueBtn>
      </CustomFlex>
      <CustomFlex gap={"small"}>
        <CustomInput placeholder="ELD" />
        <CustomInput value={"Vehicle"} />
      </CustomFlex>
      <Radio>Look</Radio>
      <CustomFlex justify="space-between">
        <CustomFlex gap={"small"}>
          <CustomBtn>Swap</CustomBtn>
          <CustomBtn>Time</CustomBtn>
        </CustomFlex>
        <CustomFlex gap={"small"}>
          <CustomBtn bg="#F3F3F4" color="#000">
            Cancel
          </CustomBtn>
          <CustomBtn>Ok</CustomBtn>
        </CustomFlex>
      </CustomFlex>
    </Modal>
  );
};
