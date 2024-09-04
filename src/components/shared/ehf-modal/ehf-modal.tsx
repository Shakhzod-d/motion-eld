import { Flex, Modal, Table } from "antd";
import { Dispatch, SetStateAction } from "react";
import { StyledDatePicker } from "../driver-info/driver-info-styled";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { TransparentButton } from "../../../pages/ifta-reports/ifta-reports-styled";
import { ehfModalColums, ehfModalData } from "../../../utils";
import { DefaultBtn, PrimaryBtn } from "../../../pages/units/units-styled";

dayjs.extend(customParseFormat);

const dateFormat = "DD-MM-YYYY";

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}

export const EhfModal = ({ open, setOpen }: Props) => {
  return (
    <Modal
      width={"80%"}
      open={open}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
    >
      <Flex gap={10} vertical>
        <Flex gap={5}>
          <StyledDatePicker
            defaultValue={dayjs("03-10-2024", dateFormat)}
            minDate={dayjs("2019-08-01", dateFormat)}
            maxDate={dayjs("2020-10-31", dateFormat)}
            disabled
          />
          <Flex gap={2}>
            <TransparentButton
              padding="10px 20px"
              width="52px"
              height="48px"
              border="10px 0px 0px 10px"
              disabled
            >
              <MdOutlineKeyboardArrowLeft size={24} />
            </TransparentButton>
            <TransparentButton
              padding="10px 20px"
              width="52px"
              height="48px"
              disabled
              border="0 10px 10px 0px"
            >
              <MdOutlineKeyboardArrowRight size={24} />
            </TransparentButton>
          </Flex>
        </Flex>

        <Table columns={ehfModalColums} dataSource={ehfModalData} />

        <Flex justify="space-between">
          <Flex gap={"10px"}>
            <DefaultBtn style={{ width: "200px", height: "55px" }}>
              Cancel
            </DefaultBtn>
            <DefaultBtn style={{ width: "200px", height: "55px" }} disabled>
              Clear
            </DefaultBtn>
          </Flex>

          <Flex gap={"10px"}>
            <PrimaryBtn style={{ width: "200px", height: "55px" }}>
              Manual EHF
            </PrimaryBtn>
            <PrimaryBtn style={{ width: "200px", height: "55px" }}>
              EHF
            </PrimaryBtn>
          </Flex>
        </Flex>
      </Flex>
    </Modal>
  );
};
