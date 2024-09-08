import { AddBtn, Container, Top } from "./company-styled";
import { FaPlus } from "react-icons/fa6";
import { Main } from "../../utils/index";
import { CustomInput, Navbar } from "../../components/ui";
import { InfoTable } from "../../components/shared";
import { companyTableData, companyTableHeader } from "../../utils/constants";

export const Company = () => (
  <Main>
    <Navbar title={"Company"} />
    <Container>
      <Top>
        <CustomInput type="search" />
        <AddBtn type="primary" icon={<FaPlus size={20} />}></AddBtn>
      </Top>

      <div>
        <InfoTable header={companyTableHeader} data={companyTableData} />
      </div>
    </Container>
  </Main>
);
