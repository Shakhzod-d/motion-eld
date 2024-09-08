// import type { FC } from "react";
import { Button, Input } from "antd";
import { Container,  Top } from "./company-styled";
import { AiOutlineSearch } from "react-icons/ai";
// import CompanyCard from "../../components/shared/company-card/company-card";
import { FaPlus } from "react-icons/fa6";
import { Main } from "../../utils/index";
import { Navbar } from "../../components/ui";
import { InfoTable } from "../../components/shared";
import { companyTableData, companyTableHeader } from "../../utils/constants";

export const Company = () => (
  <Main>
    <Navbar title={"Company"} />
    <Container>
      <Top>
        <Input type="search" prefix={<AiOutlineSearch />} />
        <Button type="primary" icon={<FaPlus />}></Button>
      </Top>

      <div>
        <InfoTable header={companyTableHeader}  data={companyTableData}/>
      </div>
    </Container>
  </Main>
);
