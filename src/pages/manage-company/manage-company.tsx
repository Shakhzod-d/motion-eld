import { useState } from "react";
import { TransparentButton } from "../ifta-reports/ifta-reports-styled";
import { Flex, Table } from "antd";
import { manageCompanyButtons } from "../../utils/constants";

export const ManageCompany = () => {
  const [activeBtn, setActiveBtn] = useState<number>(1);

  const setOpen = (value: string) => {
    console.log(value);
  };

  return (
    <>
      {/* Universal component which cretead by Behruz */}

      <Flex justify="space-between">
        <Flex gap={5}>
          {manageCompanyButtons.map((item) => (
            <TransparentButton
              key={item.id}
              active={(activeBtn == item.id).toString()}
              onClick={() => setActiveBtn(item.id)}
            >
              {item.text}
            </TransparentButton>
          ))}
        </Flex>

        <TransparentButton>Refresh</TransparentButton>
      </Flex>
      <Table dataSource={data} columns={columns} />
    </>
  );
};
