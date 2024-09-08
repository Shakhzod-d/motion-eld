import { Flex, Modal } from "antd";
import { Dispatch, SetStateAction, useState } from "react";
import { Title } from "../log-form-modal/log-modal-styled";
import { editUserModalBtns, editUserRoleModalBtns } from "../../../utils";
import { TransparentButton } from "../../../pages/ifta-reports/ifta-reports-styled";
import {
  DefaultBtn,
  ModalInput,
  ModalSelect,
  PrimaryBtn,
} from "../../../pages/units/units-styled";
import { EditModalBtn } from "../../ui";
interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}
export const UserEditModal = ({ setOpen, open }: Props) => {
  const [activeBtn, setActiveBtn] = useState<number>(1);

  return (
    <Modal
      width={"100%"}
      style={{ maxWidth: `${activeBtn == 1 ? "1330px" : "1000px"}` }}
      open={open}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
    >
      <Flex vertical gap={10} style={{ marginTop: "40px" }}>
        <Flex justify="space-between">
          <Title>Edit user</Title>

          <Flex gap={10}>
            {editUserModalBtns.map((item) => (
              <TransparentButton
                key={item.id}
                active={String(activeBtn == item.id)}
                onClick={() => setActiveBtn(item.id)}
              >
                {item.text}
              </TransparentButton>
            ))}
          </Flex>
        </Flex>

        {activeBtn == 1 ? (
          <>
            <Flex gap={10}>
              <ModalSelect
                defaultValue="status"
                options={[
                  { value: "status", label: "Reseller" },
                  { value: "active", label: "Actice" },
                  { value: "completed", label: "Completed" },
                ]}
              />

              <ModalInput placeholder="Phone" />
            </Flex>

            <Flex gap={10}>
              <ModalInput placeholder="First name" />
              <ModalInput placeholder="Last name" />
              <ModalInput placeholder="Email" />
              <ModalInput placeholder="Password" />
            </Flex>

            <Flex gap={10}>
              <ModalSelect
                defaultValue="status"
                options={[
                  { value: "status", label: "Status" },
                  { value: "active", label: "Actice" },
                  { value: "completed", label: "Completed" },
                ]}
              />
              <ModalSelect
                defaultValue="status"
                options={[
                  { value: "status", label: "Two-factures" },
                  { value: "active", label: "Actice" },
                  { value: "completed", label: "Completed" },
                ]}
              />
              <ModalSelect
                defaultValue="status"
                options={[
                  { value: "status", label: "Role" },
                  { value: "active", label: "Actice" },
                  { value: "completed", label: "Completed" },
                ]}
              />
            </Flex>
          </>
        ) : (
          <>
            <Flex
              gap={65}
              justify="space-between"
              style={{ paddingRight: "60px" }}
            >
              {editUserRoleModalBtns.map((col) => (
                <Flex key={col.id} vertical gap={20}>
                  {col.title ? <Title size="24px">{col.title}</Title> : ""}

                  {col.options.map((item) => (
                    <Flex vertical gap={15}>
                      <Title size="16px">{item.title}</Title>
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
            </Flex>
          </>
        )}

        <Flex gap={10} justify="end" style={{ marginTop: "50px" }}>
          <DefaultBtn style={{ width: "200px", height: "55px" }}>
            Cancel
          </DefaultBtn>
          <PrimaryBtn style={{ width: "200px", height: "55px" }}>Ok</PrimaryBtn>
        </Flex>
      </Flex>
    </Modal>
  );
};
