import { Flex, Modal } from "antd";
import { Dispatch, SetStateAction } from "react";
import { Div, P, StyledCalendar } from "./time-picker-styled";
import { StyledInput } from "../../../pages/manage-company/manage-company-styled";
import { TransparentButton } from "../../../pages/ifta-reports/ifta-reports-styled";

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}

export const TimePickerModal = ({ open, setOpen }: Props) => {
  return (
    <Modal
      width={361}
      open={open}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
    >
      <Flex gap={10} vertical>
        <StyledCalendar />

        <Flex justify="space-between" align="center">
          <P>Start</P>

          <Flex gap={5}>
            <StyledInput
              defaultValue={"08:00"}
              width={"65px"}
              height={"34px"}
              padding="6px 11px"
              background={"#f9f9fa"}
            />

            <Div>
              <TransparentButton padding="5px 10px" width="58px" height="34px">
                AM
              </TransparentButton>
            </Div>
          </Flex>
        </Flex>
      </Flex>
    </Modal>
  );
};
