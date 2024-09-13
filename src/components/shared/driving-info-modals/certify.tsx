import { Flex, Modal } from "antd";
import { Dispatch, SetStateAction } from "react";
import { Text } from "../../../utils/constants";
import { Box, StyledCheckbox } from "./modals.styled";
import { Btn, CustomFlex } from "../manage-user-modal/modal-styled";

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}
export const Certify = ({ open, setOpen }: Props) => {
  return (
    <Modal
      width="1200px"
      open={open}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
    >
      <Text size={30} $mb="20px" $font="600">
        Certify
      </Text>
      <Text size={24} $mb="20px" color="#8C8C9B">
        Driver signature
      </Text>
      <Box>
        <p>{`[{"status":"sleep","start":"12:00:00 AM","end":"2024-01-15T11:32:00.000Z","duration":"6h:`}</p>
      </Box>
      <div>
        <StyledCheckbox>Jan 04 Thursday</StyledCheckbox>
      </div>
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
