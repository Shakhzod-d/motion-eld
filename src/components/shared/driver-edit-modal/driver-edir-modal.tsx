import { Flex, Modal } from "antd";
import { Dispatch, SetStateAction, useState } from "react";
import {
  StyledTimePicker,
  TransparentButton,
} from "../../../pages/ifta-reports/ifta-reports-styled";
import {
  DefaultBtn,
  ModalInput,
  PrimaryBtn,
} from "../../../pages/units/units-styled";
import { driverEditModalBtns } from "../../../utils";

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}

export const DriverEditModal = ({ setOpen, open }: Props) => {
  const [activeBtn, setActiveBtn] = useState<number | null>(null);

  return (
    <Modal
      width={1000}
      open={open}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
    >
      <Flex gap={10} vertical>
        <Flex gap={10}>
          {driverEditModalBtns.map((item) => (
            <TransparentButton
              key={item.id}
              active={String(activeBtn == item.id)}
              onClick={() => setActiveBtn(item.id)}
              width="180px"
              height="120px"
              padding="60px 45px 30px"
              $background="#F9F9FA"
            >
              {item.text}
            </TransparentButton>
          ))}
        </Flex>

        <Flex justify="end">
          <TransparentButton
            padding="15px 25px"
            width="121px"
            height="50px"
            $background="#F3F3F4"
          >
            Clear Form
          </TransparentButton>
        </Flex>

        <Flex gap={10}>
          <ModalInput placeholder="Form" />
          <StyledTimePicker use12Hours format="hh:mm:ss a" />
        </Flex>

        <Flex gap={10}>
          <ModalInput placeholder="Lat" />
          <ModalInput placeholder="Lng" />
          <TransparentButton
            color="#fff"
            $background="#3DA8D5"
            width="128px"
            height="65px"
          >
            Get location
          </TransparentButton>
        </Flex>

        <Flex gap={10}>
          <ModalInput placeholder="Location Name" width={"100%"} />
          <TransparentButton
            color="#fff"
            $background="#3DA8D5"
            width="156px"
            height="65px"
          >
            Get Coordinates
          </TransparentButton>
        </Flex>

        <ModalInput width="100%" placeholder="Odometer" />

        <ModalInput width="100%" placeholder="Eng. hours" />

        <Flex gap={10}>
          <ModalInput placeholder="Note" width="100%" />
          <TransparentButton
            color="#fff"
            $background="#3DA8D5"
            width="128px"
            height="65px"
          >
            Add quickly
          </TransparentButton>
        </Flex>

        <Flex justify="space-between">
          <Flex gap={"10px"}>
            <PrimaryBtn style={{ width: "200px", height: "55px" }}>
              Swap
            </PrimaryBtn>
            <PrimaryBtn style={{ width: "200px", height: "55px" }}>
              Time
            </PrimaryBtn>
          </Flex>

          <Flex gap={"10px"}>
            <DefaultBtn style={{ width: "200px", height: "55px" }}>
              Close
            </DefaultBtn>
            <PrimaryBtn style={{ width: "200px", height: "55px" }}>
              OK
            </PrimaryBtn>
          </Flex>
        </Flex>
      </Flex>
    </Modal>
  );
};
