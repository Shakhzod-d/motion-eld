import { Flex, Modal } from "antd";
import { Text } from "../../../utils/constants";
import { Btn, CustomFlex, TabBtn } from "./modal-styled";
import { useState, Dispatch, SetStateAction } from "react";
import { Information } from "./information";
import { Permission } from "./permission";

const btnArr = [
  { id: 1, label: "Base information" },
  { id: 2, label: "Permission" },
];
interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}
export const ManageUserModal = ({ setOpen, open }: Props) => {
  const [tabId, setTabId] = useState(1);
  return (
    <Modal
      width={"1300px"}
      open={open}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
    >
      <CustomFlex justify="space-between" align="center">
        <Text size={30}>Add User</Text>
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
      {tabId == 1 ? <Information /> : <Permission />}
      <CustomFlex justify="end">
        <Flex gap={"small"}>
          <Btn type="primary" onClick={() => setOpen(false)}>
            Close
          </Btn>

          <Btn type="primary" $type="add">
            Add
          </Btn>
        </Flex>
      </CustomFlex>
    </Modal>
  );
};
