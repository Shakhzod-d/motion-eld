// import type { FC } from "react";
import { Button, Input } from "antd";
import { CardsTop, Container, StyledSelect, Top } from "./company-styled";
import { AiOutlineSearch } from "react-icons/ai";
import CompanyCard from "../../components/shared/company-card/company-card";
import { FaPlus } from "react-icons/fa6";
import { Main } from "../../utils/index";
import { Navbar } from "../../components/ui";

export const Company = () => (
  <Main>
    <Navbar title={"Company"} />
    <Container>
      <Top>
        <Input type="search" prefix={<AiOutlineSearch />} />
        <Button type="primary" icon={<FaPlus />}></Button>
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
