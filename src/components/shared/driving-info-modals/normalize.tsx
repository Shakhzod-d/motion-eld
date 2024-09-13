import { Flex, Modal } from "antd";
import { Dispatch, SetStateAction, useState } from "react";
import { Text } from "../../../utils/constants";
import { CustomSelect } from "../../ui";
import {
  Btn,
  CustomFlex,
  CustomInput,
} from "../manage-user-modal/modal-styled";

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}
const option = [
  { label: "Manual", value: "manual" },
  { label: "Auto", value: "auto" },
];
export const Normalize = ({ open, setOpen }: Props) => {
  const [selectValue, setSelectValue] = useState<unknown>("manual");
  const Change = (e: unknown) => {
    setSelectValue(e);
  };
  return (
    <Modal
      width={"900px"}
      open={open}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
    >
      <Text size={30} $mb="20px">
        Normalize Driving
      </Text>
      <Text size={20} color="#FC973A" $line="150%" $mb="20px">
        ELD Inc, as your service provider, is not responsible for any financial
        or legal repercussions resulting from facilitating your request. It is
        the sole responsibility of the user to maintain legal compliance while
        using ELD.
      </Text>
      <CustomSelect
        width="100%"
        placeholder="Manual"
        option={option}
        change={Change}
      />
      {selectValue == "manual" && (
        <CustomInput placeholder="Max speed" $margin="10px 0" />
      )}
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
