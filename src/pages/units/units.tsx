import { useState } from "react";
import {
  DefaultBtn,
  ModalCheckBox,
  ModalInput,
  ModalSelect,
  ModalTextArea,
  ModalTitle,
  PrimaryBtn,
  TopContainer,
} from "./units-styled";
import { Flex, Modal } from "antd";
import { Main, unitsButtons, unitsColumns, unitsData } from "../../utils/index";
import { CustomSelect, Navbar } from "../../components/ui";
import { TransparentButton } from "../ifta-reports/ifta-reports-styled";
import { CustomTable } from "../../components/shared";

export const Units = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [activeBtn, setActiveBtn] = useState<number>(1);

  return (
    <Main>
      <Navbar title={"Units"} />
      <TopContainer>
        <PrimaryBtn onClick={() => setOpen(true)}>Add new vehicle</PrimaryBtn>
      </TopContainer>
      <Flex gap={10}>
        {unitsButtons.map((item) => (
          <TransparentButton
          key={item.id}
            active={(activeBtn == item.id).toString()}
            onClick={() => setActiveBtn(item.id)}
          >
            {item.text}
          </TransparentButton>
        ))}
      </Flex>

      {/* Units table data */}

      <CustomTable columns={unitsColumns} data={unitsData} />

      {/* Units change modal */}

      <Modal
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <ModalTitle>Create Vehicle</ModalTitle>

        <Flex vertical gap={10}>
          <Flex justify="space-between" gap="10px">
            <ModalInput placeholder="Vehicle ID" type="number" />
            <CustomSelect
              placeholder={"default"}
              option={[{ value: "default", label: "Makes" }]}
              width="50%"
              height={70}
            />
          </Flex>
          <Flex justify="space-between" gap="10px">
            <CustomSelect
              placeholder={"default"}
              option={[{ value: "default", label: "Models" }]}
              width="50%"
              height={70}
            />
            <ModalInput placeholder="Licensec Plate No" type="number" />
          </Flex>
          <Flex justify="space-between" gap="10px">
            <CustomSelect
              placeholder={"default"}
              option={[
                { value: "default", label: "Licensec Plate Issuing State" },
              ]}
              width="50%"
              height={70}
            />
            <CustomSelect
              placeholder={"default"}
              option={[{ value: "default", label: "Year" }]}
              width="50%"
              height={70}
            />
          </Flex>
          <Flex>
            <CustomSelect
              placeholder={"default"}
              option={[{ value: "default", label: "Fuel Type" }]}
              width="100%"
              height={70}
            />
          </Flex>
          <ModalTextArea placeholder="Notes" />
          <Flex vertical>
            <ModalCheckBox>Enter Vin Manually</ModalCheckBox>
            <ModalInput placeholder="Type" style={{ width: "100%" }} />
          </Flex>
          <Flex vertical>
            <ModalCheckBox>
              Get Automatically from ELD ( recommended )
            </ModalCheckBox>
            <ModalInput placeholder="Type" style={{ width: "100%" }} />
          </Flex>
          <Flex justify="end" gap={"10px"}>
            <DefaultBtn
              onClick={() => setOpen(false)}
              style={{ width: "200px", height: "55px" }}
            >
              Close
            </DefaultBtn>
            <PrimaryBtn
              onClick={() => setOpen(false)}
              style={{ width: "200px", height: "55px" }}
            >
              Save
            </PrimaryBtn>
          </Flex>
        </Flex>
      </Modal>
    </Main>
  );
};
