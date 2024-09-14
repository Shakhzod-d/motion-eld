import { Flex, Modal } from "antd";
import { Dispatch, SetStateAction, useState } from "react";
import { Div, P, StyledCalendar } from "./time-picker-styled";
import { StyledInput } from "../../../pages/manage-company/manage-company-styled";
import { TransparentButton } from "../../../pages/ifta-reports/ifta-reports-styled";
import { MdRestartAlt } from "react-icons/md";
import { DefaultBtn, PrimaryBtn } from "../../../pages/units/units-styled";

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}

export const TimePickerModal = ({ open, setOpen }: Props) => {
  const [startActiveBtn, setStartActiveBtn] = useState(1);
  const [finishActiveBtn, setFinishActiveBtn] = useState(2);

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

          <Flex gap={5} align="center">
            <StyledInput
              defaultValue={"08:00"}
              width={"65px"}
              height={"34px"}
              padding="6px 11px"
              $background={"#f9f9fa"}
            />

            <Div>
              <TransparentButton
                padding="3px 10px"
                width="58px"
                height="34px"
                $background={startActiveBtn != 1 ? "#F9F9FA" : "#F3F3F4"}
                onClick={() => setStartActiveBtn(1)}
              >
                AM
              </TransparentButton>
              <TransparentButton
                padding="3px 10px"
                width="58px"
                height="34px"
                $background={startActiveBtn != 2 ? "#F9F9FA" : "#F3F3F4"}
                onClick={() => setStartActiveBtn(2)}
              >
                PM
              </TransparentButton>
            </Div>
          </Flex>
        </Flex>

        <Flex justify="space-between" align="center">
          <P>End</P>

          <Flex gap={5} align="center">
            <StyledInput
              defaultValue={"08:00"}
              width={"65px"}
              height={"34px"}
              padding="6px 11px"
              $background={"#f9f9fa"}
            />

            <Div>
              <TransparentButton
                padding="3px 10px"
                width="58px"
                height="34px"
                $background={finishActiveBtn != 1 ? "#F9F9FA" : "#F3F3F4"}
                onClick={() => setFinishActiveBtn(1)}
              >
                AM
              </TransparentButton>
              <TransparentButton
                padding="3px 10px"
                width="58px"
                height="34px"
                $background={finishActiveBtn != 2 ? "#F9F9FA" : "#F3F3F4"}
                onClick={() => setFinishActiveBtn(2)}
              >
                PM
              </TransparentButton>
            </Div>
          </Flex>
        </Flex>

        <Flex gap={10}>
          <DefaultBtn
            padding="15px 25px"
            width="100px"
            height="50px"
            $background="#F3F3F4"
          >
            <MdRestartAlt />
          </DefaultBtn>

          <PrimaryBtn width="220px" height="50px">
            Apply
          </PrimaryBtn>
        </Flex>
      </Flex>
    </Modal>
  );
};
