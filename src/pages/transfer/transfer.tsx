import { useEffect } from "react";
import { Table } from "antd";
import { Navbar } from "../../components/ui";
import {
  Main,
  transferBtns,
  transferColums,
  transferData,
} from "../../utils/index";
import { TransparentButton } from "../ifta-reports/ifta-reports-styled";
import { TopContainer } from "../units/units-styled";

export const Transfer = () => {
  // MUST DELETE AFTER CONNECT TO API
  useEffect(() => {
    console.clear(); // buni yozishimga sabab Table dagi data ni Array() methodi orqali yaratganim uchun unique key error console ga chiqib qolyabdi. backend bilan ulanayotgan bu muammo bo'lmaydi.
  }, []);

  // MUST DELETE AFTER CONNECT TO API

  return (
    <Main>
      <Navbar title={"FMCSA Report"} />

      <TopContainer gap="5px">
        {transferBtns.map((item) => (
          <TransparentButton
            padding="20px 35px"
            width="auto"
            height="60px"
            key={item.id}
          >
            {item.text}
          </TransparentButton>
        ))}
      </TopContainer>

      <Table columns={transferColums} dataSource={transferData} />
    </Main>
  );
};
