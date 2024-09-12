import { Flex } from "antd";

import { EditModalBtn } from "../../ui";
import { permissionModal, Text } from "../../../utils/constants";
import { Btn, CustomFlex } from "./modal-styled";

export const Permission = () => {
  return (
    <>
      <CustomFlex gap={"140px"}>
        {" "}
        {permissionModal.map((col) => (
          <Flex key={col.id} vertical gap={20}>
            {col.title ? <Text size={24}>{col.title}</Text> : ""}

            {col.options.map((item) => (
              <Flex vertical gap={15}>
                <Text size={16}>{item.title}</Text>
                <Flex gap={10}>
                  {item.buttons.map((btn) => (
                    <EditModalBtn
                      key={btn.id}
                      text={btn.text}
                      isActive={btn.isActive}
                    />
                  ))}
                </Flex>
              </Flex>
            ))}
          </Flex>
        ))}
      </CustomFlex>
      <CustomFlex justify="end">
        <Flex gap={"small"}>
          <Btn type="primary">Close</Btn>

          <Btn type="primary" $type="add">
            Add
          </Btn>
        </Flex>
      </CustomFlex>
    </>
  );
};
