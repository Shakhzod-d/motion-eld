import { AddBtn, Top } from "./company-styled";
import { FaPlus } from "react-icons/fa6";
import { Main } from "../../utils/index";
import { CustomInput, Navbar, PageLoad } from "../../components/ui";
import { CompanyModal, InfoTable } from "../../components/shared";
import { companyTableHeader } from "../../utils/constants";
import { useState } from "react";
import useApi from "../../hooks/useApi";
import { mapCompanies } from "../../utils/mapData";
import { useDebounce } from "../../hooks/use-debauce";
import { ObjType } from "../../types/helper.type";

export const Company = () => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const searchValue = useDebounce(searchTerm, 300);

  const { data, isLoading } = useApi("/companies", {
    page: 1,
    limit: 1000,
  });

  const companies = mapCompanies(data ? data?.data?.data : []);


  const filteredData = companies.filter((data: ObjType) =>
    String(data?.name?.label)
      .toLowerCase()
      .startsWith(searchValue.toLowerCase())
  );

  const modalActive = (id: string) => {
    console.log(id);
    setOpen(true);
  };

  return (
    <Main>
      <CompanyModal open={open} setOpen={setOpen} />
      <Navbar title={"Company"} search={false} />

      <Top>
        <CustomInput
          type="search"
          change={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(e.target.value)
          }
        />
        <AddBtn type="primary" icon={<FaPlus size={20} />}></AddBtn>
      </Top>

      <div>
        {isLoading ? (
          <PageLoad bg="#f3f3f4" h="calc(100vh - 400px)" />
        ) : (
          <InfoTable
            header={companyTableHeader}
            data={filteredData}
            editData={modalActive}
          />
        )}
      </div>
    </Main>
  );
};
