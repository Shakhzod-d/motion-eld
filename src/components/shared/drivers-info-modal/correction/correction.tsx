import { Flex, Modal } from "antd";
import { CustomBtn, DataBox, DataBtn, Head } from "./correction-styled";
import { Text } from "../../../../utils/constants";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export const Correction = () => {
  return (
    <Modal open={true} width={"85%"}>
      <Head>
        <Flex gap={"5px"}>
          <DataBox>
            <Text color="#8C8C9B">03-10-2024</Text>
          </DataBox>
          <Flex gap={"2px"}>
            <DataBtn>
              {" "}
              <MdOutlineKeyboardArrowLeft size={24} color="#8C8C9B" />
            </DataBtn>
            <DataBtn style={{ rotate: "180deg" }}>
              {" "}
              <MdOutlineKeyboardArrowLeft size={24} color="#8C8C9B" />
            </DataBtn>
          </Flex>
        </Flex>
        <Flex gap={"middle"}>
          <CustomBtn type="primary">Normalize</CustomBtn>
          <CustomBtn type="primary">DFM</CustomBtn>
          <CustomBtn type="primary">Certfy</CustomBtn>
          <CustomBtn type="primary">PTI</CustomBtn>
          <CustomBtn type="primary">EHF</CustomBtn>
          <CustomBtn type="primary">Break</CustomBtn>
          <CustomBtn type="primary">Shift Fix</CustomBtn>
        </Flex>
        <CustomBtn type="primary" $bg="#FC973A" $clr="#fff">ok</CustomBtn>
      </Head>
    </Modal>
  );
};
