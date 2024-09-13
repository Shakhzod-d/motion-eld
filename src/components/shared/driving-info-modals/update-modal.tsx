import { Flex, Modal, Radio } from "antd";
import { Dispatch, SetStateAction } from "react";
import { Text } from "../../../utils/constants";
import { Btn, CustomFlex, CustomInput, StyleFlex } from "../manage-user-modal/modal-styled";
import { Label } from "../../../pages/manage-company/manage-company-styled";
import { CustomSelect } from "../../ui";

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}

export const UpdateModal = ({ open, setOpen }: Props) => {
  return (
    <Modal
      width={"1200px"}
      open={open}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
    >
      <Text size={30} $mb="20px" $font="500">
        Update
      </Text>
      <Text size={20} color="#FC973A" $line="150%" $mb="20px">
        ELD Inc, as your service provider, is not responsible for any financial
        or legal repercussions resulting from facilitating your request. It is
        the sole responsibility of the user to maintain legal compliance while
        using ELD.
      </Text>
      <StyleFlex gap={"10px"}>
        <div style={{ width: "100%" }}>
          <Label>Time</Label>
          <CustomInput width={"100%"} placeholder="12:00:00AM" />
        </div>
        <div style={{ width: "100%" }}>
          <Label>Status</Label>
          <div>
            <CustomSelect
              width="100%"
              height={65}
              option={[{ label: "Sertfy", value: "sertfy" }]}
              placeholder="Sertfy"
            />
          </div>
        </div>
      </StyleFlex>

      <StyleFlex gap={"10px"}>
        <div style={{ width: "100%" }}>
          <Label>Driver Signature</Label>
          <CustomInput width={"100%"} placeholder="Example text" />
        </div>
      </StyleFlex>

      <StyleFlex gap={"10px"}>
        <div style={{ width: "100%" }}>
          <Label>Sertfy Date</Label>
          <CustomInput width={"100%"} placeholder="01-14-2024" />
        </div>
        <div style={{ width: "100%" }}>
          <Label>Truck</Label>
          <div>
            <CustomSelect
              width="100%"
              height={65}
              option={[{ label: "Sertfy", value: "sertfy" }]}
              placeholder="example@mail.com"
            />
          </div>
        </div>
      </StyleFlex>
      <Radio>Lock</Radio>
      <CustomFlex justify="end">
        <Flex gap={"small"}>
          <Btn type="primary">Close</Btn>

          <Btn type="primary" $type="add">
            OK
          </Btn>
        </Flex>
      </CustomFlex>
    </Modal>
  );
};
