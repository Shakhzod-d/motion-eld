import { AddBtn, Top } from "./company-styled";
import { FaPlus } from "react-icons/fa6";
import { Main, setLocalStorage } from "../../utils/index";
import { CustomInput, Navbar, PageLoad } from "../../components/ui";
import { CompanyModal, InfoTable } from "../../components/shared";
import { companyTableHeader } from "../../utils/constants";
import { useState } from "react";
import useApi from "../../hooks/useApi";
import { mapCompanies } from "../../utils/mapData";
import { useDebounce } from "../../hooks/use-debauce";
import { CompanyData } from "../../utils/method";
import { setCompany, setPageLoading } from "../../utils/dispatch";
import { useNavigate } from "react-router-dom";
import { Data } from "../../store/company-slice";
import { useErrAuth } from "../../hooks/useAuth";



export const Company = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const searchValue = useDebounce(searchTerm, 300);
  const { errFun } = useErrAuth();
  const { data, isLoading } = useApi("/companies", {
    page: 1,
    limit: 1000,
  });

  const companies = mapCompanies(data ? data?.data?.data : []);

  const filteredData = companies.filter((data) =>
    String(data?.name?.label)
      .toLowerCase()
      .startsWith(searchValue.toLowerCase())
  );

  const modalActive = (id: string) => {
    console.log(id);
    setOpen(true);
  };
  const CompanyHandler = async (id: string) => {
    try {
      setPageLoading(true);
      const data: Data = await CompanyData(id);
      setLocalStorage("companyId", id);
      setLocalStorage("company", data);
      setCompany(data);
      await navigate(`/companyId=${id}/main/dashboard`);
    } catch (err) {
      // console.log(err);
      return errFun(err);
    } finally {
      setPageLoading(false);
    }
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
          <PageLoad h="calc(100vh - 400px)" />
        ) : (
          <InfoTable
            header={companyTableHeader}
            data={filteredData}
            editData={modalActive}
            onClick={CompanyHandler}
          />
        )}
      </div>
    </Main>
  );
};
