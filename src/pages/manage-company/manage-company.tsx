import { useState, type FC } from "react";
import { TransparentButton } from "../ifta-reports/ifta-reports-styled";
import { Flex } from "antd";

interface ManageCompanyProps {
  data?: string[];
}

const buttons = [
  { id: 1, text: "Company" },
  { id: 2, text: "Profile" },
  { id: 3, text: "Users" },
  { id: 4, text: "Api keys" },
  { id: 5, text: "Histories" },
];

export const ManageCompany: FC<ManageCompanyProps> = () => {
  const [activeBtn, setActiveBtn] = useState<number>(1);

  return (
    <>
      <section>
        {/* Universal component which cretead by Behruz */}

        <Flex justify="space-between">
          <Flex gap={5}>
            {buttons.map((item) => (
              <TransparentButton
                key={item.id}
                style={{
                  height: "60px",
                  background: `${activeBtn == item.id ? "#19223F" : "#fff"}`,
                  color: `${activeBtn == item.id ? "#fff" : "#000"}`,
                }}
                onClick={() => setActiveBtn(item.id)}
              >
                {item.text}
              </TransparentButton>
            ))}
          </Flex>
          <TransparentButton style={{ height: "60px" }}>
            Refresh
          </TransparentButton>
        </Flex>
      </section>
    </>
  );
};
