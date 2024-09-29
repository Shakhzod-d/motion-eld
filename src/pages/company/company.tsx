import { AddBtn, Container, Top } from "./company-styled";
import { FaPlus } from "react-icons/fa6";
import { Main } from "../../utils/index";
import { CustomInput, Navbar } from "../../components/ui";
import { CompanyModal, InfoTable } from "../../components/shared";
import { companyTableData, companyTableHeader } from "../../utils/constants";
import { useState } from "react";

export const Company = () => {
  const [open, setOpen] = useState(false);
  const modalActive = (id: number) => {
    console.log(id);
    setOpen(true);
  };
  return (
    <Main>
      <CompanyModal open={open} setOpen={setOpen} />
      <Navbar title={"Company"} search={false} />
      <Container>
        <Top>
          <CustomInput type="search" />
          <AddBtn type="primary" icon={<FaPlus size={20} />}></AddBtn>
        </Top>

        <div>
          <InfoTable
            header={companyTableHeader}
            data={companyTableData}
            editData={modalActive}
          />
        </div>
      </Container>
    </Main>
  );
};
