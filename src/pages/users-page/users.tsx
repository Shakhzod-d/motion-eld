import { Flex } from "antd";
import { CustomInput, Navbar } from "../../components/ui";
import { Main } from "../../utils";
import { CustomButton } from "./users-styled";
import { FaPlus } from "react-icons/fa";
import { InfoTable, UserEditModal } from "../../components/shared";
import { usersTableData, usersTableHeader } from "../../utils/constants";
import { useState } from "react";
import useApiMutation from "../../hooks/useApiMutation";
import { ILoginData } from "../../types";

export const Users = () => {
  const [open, setOpen] = useState<boolean>(false);
  const loginMutation = useApiMutation("/user", { hideMessage: true });
  const editData = (id: number) => {
    setOpen(true);
  };
  function adUser() {
    const dataArr = {
      firstName: "behruzz",
      lastName: "pardayev",
      role: {
        roleName: "logger",
        roleId: "66f53bbc1cd8d940cd313b31e",
      },
      phone: "+998955555555",
      email: "demo@gmail.com",
      password: "123456",
      serviceId: null,
    };
    loginMutation.mutate(dataArr, {
      onSuccess: (res: ILoginData) => {
        const { data } = res;

        console.log("user", data);
      },
      onError: (err) => {
        console.log(err);
      },
    });
  }
  return (
    <Main>
      <UserEditModal setOpen={setOpen} open={open} />
      <Navbar title="Users" search={false} />
      <Flex justify="end" gap={"middle"}>
        <CustomInput type="search" />
        <CustomButton type="primary" onClick={adUser}>
          <FaPlus />
        </CustomButton>
      </Flex>
      <InfoTable
        header={usersTableHeader}
        data={usersTableData}
        editData={editData}
      />
    </Main>
  );
};
