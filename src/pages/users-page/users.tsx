import { Flex } from "antd";
import { CustomInput, Navbar, PageLoad } from "../../components/ui";
import { Main } from "../../utils";
import { CustomButton } from "./users-styled";
import { FaPlus } from "react-icons/fa";
import { AddUser, InfoTable, UserEditModal } from "../../components/shared";
import { useState } from "react";
import useApi from "../../hooks/useApi";
import { mapUserData } from "../../utils/mapData";
import { usersTableHeader } from "../../utils/constants";
import { useDebounce } from "../../hooks/use-debauce";
import { ObjType } from "../../types/helper.type";
export const Users = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [addUser, setAddUser] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const searchValue = useDebounce(searchTerm, 300);

  const { data, isLoading } = useApi("/users", {
    page: 1,
    limit: 1000,
  });
  const users = mapUserData(data ? data?.data?.data : []);

  const filteredData = users.filter((data: ObjType) =>
    String(data?.name?.label)
      .toLowerCase()
      .startsWith(searchValue.toLowerCase())
  );

  const editData = (id: string) => {
    setOpen(true);
    console.log(id);
  };
  return (
    <Main>
      <AddUser open={addUser} setOpen={setAddUser} />
      <UserEditModal setOpen={setOpen} open={open} />
      <Navbar title="Users" search={false} />
      <Flex justify="end" gap={"middle"}>
        <CustomInput
          type="search"
          change={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(e.target.value)
          }
        />
        <CustomButton type="primary" onClick={() => setAddUser(true)}>
          <FaPlus />
        </CustomButton>
      </Flex>
      {isLoading && <PageLoad bg="#f3f3f4" />}
      {isLoading || (
        <InfoTable
          header={usersTableHeader}
          data={filteredData}
          editData={editData}
        />
      )}
    </Main>
  );
};
