import { useState } from "react";
import { PrimaryBtn, TopContainer } from "./units-styled";
import { Flex } from "antd";
import { Main, unitsButtons, unitsColumns } from "../../utils/index";
import { Navbar, PageLoad } from "../../components/ui";
import { TransparentButton } from "../ifta-reports/ifta-reports-styled";
import { CustomTable } from "../../components/shared";
import { UnitsAddModal } from "../../components/shared/units-add-modal";
import useApi from "../../hooks/useApi";
import { ObjType } from "../../types/helper.type";
import { SelectData } from "../../types";
import { DriversSelectId } from "../../utils/dispatch";
export const Units = () => {
  
  const [open, setOpen] = useState<boolean>(false);
  const [activeBtn, setActiveBtn] = useState<number>(1);
  const { data, isLoading } = useApi("/vehicles", {
    page: 1,
    limit: 1000,
  });
  interface unitsProp {
    [key: string]: string;
  }
  const dataSort = (dataArr: ObjType[] | []) => {
    const arr: unitsProp[] = dataArr.map((item, i) => {
      const firstName = item?.driver.firstName;
      const lastNama = item?.driver.lastName;

      const modelMake = ` ${item.model}/ ${item.make}`;
      return {
        id: i,
        vehicle: item._id,
        drivers: `${firstName} ${lastNama}`,
        model: modelMake,
        eld: "PT30_09A3",
        notes: item.notes,
        vin: item.vin,
        documents: "2024-03-02",
        activated: "",
      };
    });
    const select: SelectData[] = dataArr.map((item) => {
      const firstName = item?.driver.firstName;
      const lastNama = item?.driver.lastName;
      return {
        value: item._id,
        label: `${firstName} ${lastNama}`,
      };
    });
    return { arr, select };
  };

  const unitsData = dataSort(data ? data.data?.data : []);
  // console.log(unitsData);
  DriversSelectId(unitsData.select);
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
      {isLoading ? (
        <PageLoad bg="#f3f3f4" h="calc(100vh - 400px)" />
      ) : (
        <CustomTable columns={unitsColumns} data={unitsData.arr} />
      )}
      <UnitsAddModal open={open} setOpen={setOpen} />
      {/* Units change modal */}
    </Main>
  );
};
