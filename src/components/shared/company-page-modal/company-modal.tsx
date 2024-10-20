import { Flex } from "antd";
import { CustomFlex } from "../drivers-add-modal/styled";
import { Btn, TabBtn } from "../manage-user-modal/modal-styled";
import { Dispatch, SetStateAction, useState } from "react";

import { Details } from "./details";
import { Settings } from "./settings";
import { CustomModal } from "../../../utils/constants";

const btnArr = [
  { id: 1, label: "Details" },
  { id: 2, label: "settings" },
];
interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}
export const CompanyModal = ({ setOpen, open }: Props) => {
  const [tabId, setTabId] = useState(1);
  return (
    <CustomModal
      open={open}
      width={"1300px"}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
    >
      <CustomFlex justify="" align="center">
        <Flex gap={"small"} align="center">
          {btnArr.map((item) => (
            <TabBtn
              key={item.id}
              type="primary"
              $active={item.id == tabId}
              onClick={() => setTabId(item.id)}
            >
              {item.label}
            </TabBtn>
          ))}
        </Flex>
      </CustomFlex>
      {tabId == 1 ? <Details /> : <Settings />}
      <CustomFlex justify="end">
        <Flex gap={"small"}>
          <Btn type="primary" onClick={() => setOpen(false)}>
            Close
          </Btn>

          <Btn type="primary" $type="add" onClick={() => setOpen(false)}>
            Save
          </Btn>
        </Flex>
      </CustomFlex>
    </CustomModal>
  );
};
