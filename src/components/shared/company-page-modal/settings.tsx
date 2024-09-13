import { Flex } from "antd";
import { companySettingsModal } from "../../../utils/constants";
import { EditModalBtn } from "../../ui";

export const Settings = () => {
  return (
    <>
      {companySettingsModal.map((col) => (
        <Flex key={col.id} vertical gap={20}>
          {col.options.map((item) => (
            <Flex vertical gap={15} style={{ margin: "40px" }}>
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
    </>
  );
};
