import type { FC } from "react";
import { Button, Input } from "antd";
import { Container, StyledSelect } from "./company-styled";
import { AiOutlineSearch } from "react-icons/ai";
import CompanyCard from "../../components/shared/company-card/company-card";
import { FaPlus } from "react-icons/fa6";

interface CompanyProps {
  data?: object;
}

export const Company: FC<CompanyProps> = () => (
  <>
    <Container>
      <div className="top">
        <Input type="search" prefix={<AiOutlineSearch />} />
        <Button type="primary" icon={<FaPlus />}></Button>
      </div>
      <div className="cards">
        <div className="cards-top">
          <p>Name</p>
          <div>
            <StyledSelect
              defaultValue="status"
              options={[
                { value: "status", label: "Status" },
                { value: "active", label: "Actice" },
                { value: "completed", label: "Completed" },
              ]}
            />
          </div>
          <div>
            <StyledSelect
              defaultValue="contact"
              options={[
                { value: "contact", label: "Contact" },
                { value: "active", label: "Actice" },
                { value: "completed", label: "Completed" },
              ]}
            />
          </div>
          <div>
            <StyledSelect
              defaultValue="created"
              options={[
                { value: "created", label: "Created" },
                { value: "active", label: "Actice" },
                { value: "completed", label: "Completed" },
              ]}
            />
          </div>
          <p></p>
        </div>
        <div>
          {Array(8)
            .fill(0)
            .map((_, index) => {
              return <CompanyCard key={index} />;
            })}
        </div>
      </div>
    </Container>
  </>
);
