import { AddBtn, Container, Top } from "./company-styled";
import { FaPlus } from "react-icons/fa6";
import { Main } from "../../utils/index";
import { CustomInput, Navbar } from "../../components/ui";
import { CompanyModal, InfoTable } from "../../components/shared";
import { companyTableHeader } from "../../utils/constants";
import { useState } from "react";
import useApi from "../../hooks/useApi";
import { mapCompanies } from "../../utils/mapData";

export const Company = () => {
  const [open, setOpen] = useState(false);
  const { data } = useApi("/companies", {
    page: 1,
    limit: 7,
  });
  console.log(data);

  const companies = mapCompanies(data ? data?.data?.data : []);

  const modalActive = (id: string) => {
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
            data={companies}
            editData={modalActive}
          />
        </div>
      </Container>
    </Main>
  );
};
