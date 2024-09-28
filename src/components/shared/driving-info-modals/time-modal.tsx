import { Flex, Modal } from "antd";
import { Dispatch, SetStateAction } from "react";
import { Text, TimePickerInput } from "../../../utils/constants";
import { Btn, CustomFlex } from "../manage-user-modal/modal-styled";
interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}

export const TimeModal = ({ open, setOpen }: Props) => {
  return (
    <Modal
      width={"985px"}
      open={open}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
    >
      <Text $font="600" size={30} $mb="20px">
        Time
      </Text>
      <Text size={16} $font="600" $mb="10px">
        Responsibility warning
      </Text>
      <Text color="#FC973A" $line="150%" $mb="20px">
        ELD Inc, as your service provider, is not responsible for any financial
        or legal repercussions resulting from facilitating your request. It is
        the sole responsibility of the user to maintain legal compliance while
        using ELD.
      </Text>
      <TimePickerInput use12Hours format="HH:mm:ss A" />
      <CustomFlex justify="end">
        <Flex gap={"small"}>
          <Btn type="primary" onClick={() => setOpen(false)}>
            Close
          </Btn>

          <Btn type="primary" $type="add" onClick={() => setOpen(false)}>
            OK
          </Btn>
        </Flex>
      </CustomFlex>
    </Modal>
  );
};
