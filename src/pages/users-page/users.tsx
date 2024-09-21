import { Flex } from "antd";
import { CustomInput, Navbar } from "../../components/ui";
import { Main } from "../../utils";
import { CustomButton } from "./users-styled";
import { FaPlus } from "react-icons/fa";
import { InfoTable, UserEditModal } from "../../components/shared";
import { usersTableData, usersTableHeader } from "../../utils/constants";
import { useState } from "react";

export const Users = () => {
  const [open, setOpen] = useState<boolean>(false);
  const editData = (id: number) => {
    setOpen(true);
    console.log(id);
    
  };
  return (
    <Main>
      <UserEditModal setOpen={setOpen} open={open} />
      <Navbar title="Users" />
      <Flex justify="end" gap={"middle"}>
        <CustomInput type="search" />
        <CustomButton type="primary">
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
