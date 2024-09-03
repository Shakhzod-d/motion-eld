import { Flex, Modal } from "antd";
import { Dispatch, SetStateAction } from "react";
import { Description, StyledTable, Title, Warning } from "./log-modal-styled";
import { StyledTimePicker } from "../../../pages/ifta-reports/ifta-reports-styled";
import { logFormModalColums, logFormModalData } from "../../../utils";
import { DefaultBtn, PrimaryBtn } from "../../../pages/units/units-styled";

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}

export const LogFormModal = ({ setOpen, open }: Props) => {
  return (
    <Modal
      width={1000}
      open={open}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
    >
      <Flex gap={10} vertical>
        <Flex gap={15} vertical>
          <Title>Log form </Title>

          <Flex gap={5} vertical>
            <Description>Responsibility warning</Description>

            <Warning>
              TT ELD Inc, as your service provider, is not responsible for any
              financial or legal repercussions resulting from facilitating your
              request. It is the sole responsibility of the user to maintain
              legal compliance while using ELD.
            </Warning>
          </Flex>
        </Flex>

        <StyledTimePicker
          use12Hours
          format="hh:mm a"
          width="100vw"
          padding="25px 20px"
        />

        <StyledTable
          columns={logFormModalColums}
          dataSource={logFormModalData}
          pagination={false}
        />

        <Flex gap={"10px"} justify="end">
          <DefaultBtn style={{ width: "200px", height: "55px" }}>
            Cancel
          </DefaultBtn>
          <PrimaryBtn style={{ width: "200px", height: "55px" }}>Ok</PrimaryBtn>
        </Flex>
      </Flex>
    </Modal>
  );
};
