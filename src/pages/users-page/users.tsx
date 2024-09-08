import {Flex } from "antd"
import { CustomInput, Navbar } from "../../components/ui"
import {  Main } from "../../utils"
import { CustomButton } from "./users-styled"
import { FaPlus } from "react-icons/fa"
import { InfoTable } from "../../components/shared"
import { usersTableData, usersTableHeader } from "../../utils/constants"

export const Users = () => {

  return (
   <Main>
    <Navbar title="Users"/>
    <Flex justify="end" gap={"middle"}>   
        <CustomInput  type="search" />
        <CustomButton type="primary">
        <FaPlus />
        </CustomButton>
    </Flex>
      <InfoTable header={usersTableHeader}  data={usersTableData}/>
   </Main>
  )
}

