import { CustomTable, ViolationsChart } from "../../components/shared";
import {
  CustomSelect,
  Drivers,
  Navbar,
  OverviewCard,
} from "../../components/ui";
import { Main } from "../../utils/index";

import { useDispatch, useSelector } from "react-redux";
import { BiCalendarStar } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { Flex, Radio } from "antd";
import {
  dashboardTableHeader,
  dataSource,
  Reload,
  companyTable,
  Text,
  companyTableElement,
  dateTable,
  dateTableElement,
} from "../../utils/constants";

import {
  ArrowIcon,
  CardWrapper,
  CustomBtn,
  Day,
  SelectWrapper,
  Title,
  CustomRadio,
} from "./dashboard-styled";
import { OrderTablet } from "../../components/shared/order-table/order-table";
import { useState } from "react";
import { RootState } from "../../store/store";
import { dashboardProgressActive } from "../../store/booleans-slice";

export const Dashboard = () => {
  const active = useSelector(
    (state: RootState) => state.booleans.dashboardProgress
  );
  const sidebarActive = useSelector(
    (state: RootState) => state.booleans.sidebarActive
  );
  const [selectEvent, setSelectEvent] = useState<string>("order");
  const option = [
    { value: "status", label: "Two-factures" },
    { value: "active", label: "Actice" },
    { value: "completed", label: "Completed" },
  ];
  const refreshSelect = [
    { value: "off", label: "Auto Refresh off" },
    { value: "1-min", label: "1 minute" },
    { value: "5-min", label: "5 minute" },
    { value: "10-min", label: "10 minute" },
  ];
  const dispatch = useDispatch();

  function onChange(event: string) {
    setSelectEvent(event);
  }
  return (
    <Main>
      <Navbar title="Dashboard" />

      <Day>
        <Flex gap={5}>
          <CustomSelect
            option={refreshSelect}
            width="170px"
            placeholder="Auto Refresh off"
          />
        </Flex>
        <CustomBtn onClick={Reload}>Refresh</CustomBtn>
        <Flex gap={20}>
          <CustomBtn>
            <BiCalendarStar size={30} />
          </CustomBtn>
        </Flex>
      </Day>
      <CardWrapper $width={sidebarActive}>
        <Drivers />
        <ViolationsChart />
        <OverviewCard />
        <CustomBtn onClick={() => dispatch(dashboardProgressActive())}>
          <ArrowIcon $active={active}>
            <IoIosArrowDown />
          </ArrowIcon>
        </CustomBtn>
      </CardWrapper>
      <Title>Drivers info</Title>
      <SelectWrapper>
        <Radio.Group defaultValue={1}>
          <CustomRadio value={1}>Include</CustomRadio>
          <CustomRadio value={2}>Exclude</CustomRadio>
        </Radio.Group>
        <Flex gap={"small"} align="end" wrap={true}>
          <CustomSelect option={option} placeholder="Name" width="200px" />
          <CustomSelect option={option} placeholder="Company" width="200px" />
          <CustomSelect
            option={option}
            placeholder="Violations"
            width="200px"
          />
          <CustomSelect option={option} placeholder="Date" width="200px" />
          <CustomSelect
            option={option}
            placeholder="Eld connection"
            width="200px"
          />
          <CustomSelect option={option} placeholder="Cycle" />

          <div>
            <Text size={12} $mb="10px" color="#2D2E2F">
              Driver option
            </Text>
            <CustomSelect option={option} placeholder="Cycle" />
          </div>
          <div>
            <Text size={12} $mb="10px" color="#2D2E2F">
              Driver option
            </Text>
            <CustomSelect
              option={[
                { value: "order", label: "Order By" },
                { value: "company", label: "Company" },
                { value: "date", label: "Date" },
              ]}
              width={"126px"}
              placeholder="Order By"
              change={onChange}
            />
          </div>
          <div>
            <Text size={12} $mb="20px"></Text>
            <CustomSelect
              option={[{ value: "direction", label: "direction" }]}
              width={"126px"}
              placeholder="Direction"
            />
          </div>
        </Flex>
      </SelectWrapper>
      {selectEvent == "order" ? (
        <CustomTable columns={dashboardTableHeader} data={dataSource} />
      ) : (
        <OrderTablet
          data={selectEvent == "company" ? companyTable : dateTable}
          element={
            selectEvent == "company" ? companyTableElement : dateTableElement
          }
          selectEvent={selectEvent}
        />
      )}
    </Main>
  );
};
