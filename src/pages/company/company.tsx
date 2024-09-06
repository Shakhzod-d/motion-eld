// import type { FC } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import CompanyCard from "../../components/shared/company-card/company-card";
import { FaPlus } from "react-icons/fa6";
import { Main } from "../../utils/index";
import { Navbar } from "../../components/ui";
import {
  AddBtn,
  CardsTop,
  Container,
  CustomInput,
  StyledSelect,
  Top,
} from "./company-styled";

export const Company = () => (
  <Main>
    <Navbar title={"Company"} />
    <Container>
      <Top>
        <CustomInput type="search" prefix={<AiOutlineSearch />} />
        <AddBtn type="primary" icon={<FaPlus size={20} />}></AddBtn>
      </Top>

      <CardsTop>
        <p>Name</p>
        <StyledSelect
          defaultValue="status"
          options={[
            { value: "status", label: "Status" },
            { value: "active", label: "Actice" },
            { value: "completed", label: "Completed" },
          ]}
        />
        <StyledSelect
          defaultValue="contact"
          options={[
            { value: "contact", label: "Contact" },
            { value: "active", label: "Actice" },
            { value: "completed", label: "Completed" },
          ]}
        />
        <StyledSelect
          defaultValue="created"
          options={[
            { value: "created", label: "Created" },
            { value: "active", label: "Actice" },
            { value: "completed", label: "Completed" },
          ]}
        />
        <p></p>
      </CardsTop>
      <div>
        {Array(8)
          .fill(0)
          .map((_, index) => {
            return <CompanyCard key={index} />;
          })}
      </div>
    </Container>
  </Main>
);
