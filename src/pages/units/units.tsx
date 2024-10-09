import { useState } from "react";
import { PrimaryBtn, TopContainer } from "./units-styled";
import { Flex } from "antd";
import { Main, unitsButtons, unitsColumns, unitsData } from "../../utils/index";
import { Navbar } from "../../components/ui";
import { TransparentButton } from "../ifta-reports/ifta-reports-styled";
import { CustomTable } from "../../components/shared";
import { UnitsAddModal } from "../../components/shared/units-add-modal";
// import useApi from "../../hooks/useApi";

export const Units = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [activeBtn, setActiveBtn] = useState<number>(1);
  // const { data } = useApi("/vehicles", {
  //   page: 1,
  //   limit: 1000,
  // });
  // console.log(data);

  return (
    <Main>
      <Navbar title={"Units"} />
      <TopContainer>
        <PrimaryBtn onClick={() => setOpen(true)}>Add new vehicle</PrimaryBtn>
      </TopContainer>
      <Flex gap={10}>
        {unitsButtons.map((item) => (
          <TransparentButton
            key={item.id}
            active={(activeBtn == item.id).toString()}
            onClick={() => setActiveBtn(item.id)}
          >
            {item.text}
          </TransparentButton>
        ))}
      </Flex>

      {/* Units table data */}

      <CustomTable columns={unitsColumns} data={unitsData} />
      <UnitsAddModal open={open} setOpen={setOpen} />
      {/* Units change modal */}
    </Main>
  );
};
