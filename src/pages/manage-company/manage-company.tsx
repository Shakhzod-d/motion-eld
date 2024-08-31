import { useState } from "react";
import {
  BorderedBtn,
  TransparentButton,
} from "../ifta-reports/ifta-reports-styled";
import { Flex } from "antd";
import { Main, manageCompanyButtons } from "../../utils/constants";
import { Navbar } from "../../components/ui";
import { Div, Label, StyledInput } from "./manage-company-styled";

export const ManageCompany = () => {
  const [activeBtn, setActiveBtn] = useState<number>(1);

  return (
    <Main>
      {/* Universal component which cretead by Behruz */}
      <Flex gap={20} vertical>
        <Navbar title={"Manage Company"} />

        <Flex justify="space-between">
          <Flex gap={5}>
            {manageCompanyButtons.map((item) => (
              <TransparentButton
                key={item.id}
                active={(activeBtn == item.id).toString()}
                onClick={() => setActiveBtn(item.id)}
                height="60px"
              >
                {item.text}
              </TransparentButton>
            ))}
          </Flex>

          <TransparentButton height="60px">Refresh</TransparentButton>
        </Flex>

        <Flex gap={15} vertical>
          <Flex gap={10}>
            <Div>
              <Label>Company Name*</Label>
              <StyledInput defaultValue={"Caravan Logistics Group LLC"} />
            </Div>
            <Div>
              <Label>Email</Label>
              <StyledInput
                defaultValue={"dispatch@caravanlogisticsgroup.com"}
              />
            </Div>
            <Div>
              <Label>Company Address</Label>
              <StyledInput
                defaultValue={"5714 Kenneth Ave, Cincinnati, OH, 45224"}
              />
            </Div>
            <Div>
              <Label>Terminal Address</Label>
              <StyledInput
                defaultValue={"5714 Kenneth Ave, Cincinnati, OH, 45224"}
              />
            </Div>
          </Flex>

          <Flex gap={10}>
            <Div>
              <Label>Phone Number</Label>
              <StyledInput defaultValue={"(765) 994-1080"} />
            </Div>
            <Div>
              <Label>Company Timezone*</Label>
              <StyledInput defaultValue={"Eastern Standart Time"} />
            </Div>
            <Div>
              <Label>USDOT*</Label>
              <StyledInput defaultValue={"3497865"} />
            </Div>
            <Div>
              <Label>Start of week</Label>
              <StyledInput defaultValue={""} />
            </Div>
          </Flex>

          <Flex gap={10} align="center">
            <Div>
              <Label>Accounting Email</Label>
              <StyledInput defaultValue={""} />
            </Div>
            <Div>
              <Label>Safety Email</Label>
              <StyledInput defaultValue={""} />
            </Div>
            <Div>
              <Label> &nbsp;</Label>
              <BorderedBtn height="70px">Upload company logo</BorderedBtn>
            </Div>
          </Flex>
        </Flex>
      </Flex>
    </Main>
  );
};
