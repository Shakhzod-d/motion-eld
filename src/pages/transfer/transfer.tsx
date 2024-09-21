

import { Navbar } from "../../components/ui";
import {
  Main,
  transferBtns,
  transferColums,
  transferData,
} from "../../utils/index";
import { TransparentButton } from "../ifta-reports/ifta-reports-styled";
import { TopContainer } from "../units/units-styled";
import { CustomTable } from "../../components/shared";

export const Transfer = () => {
  return (
    <Main>
      <Navbar title={"FMCSA Report"} />

      <TopContainer $gap="5px">
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

      <CustomTable columns={transferColums} data={transferData} />
    </Main>
  );
};
