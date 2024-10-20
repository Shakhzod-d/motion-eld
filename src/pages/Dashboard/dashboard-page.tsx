import { CustomTable, ViolationsChart } from "../../components/shared";
import {
  CustomSelect,
  Drivers,
  Navbar,
  OverviewCard,
} from "../../components/ui";
import { getLocalStorage, Main, setLocalStorage } from "../../utils/index";

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
import { useEffect, useState } from "react";
import { RootState } from "../../store/store";
import { dashboardProgressActive } from "../../store/booleans-slice";
import { autoRefresh } from "../../utils/method";
// import useApi from "../../hooks/useApi";
// import { dashboardData } from "../../utils/mapData";

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
  // const { data, isLoading } = useApi("/main/violations", {
  //   page: 1,
  //   limit: 10,
  // });
  // console.log(data);
  // const filerData = dashboardData(data ? data?.data?.data : []);
  // console.log(filerData);

  const refreshSelect = [
    { value: "off", label: "Auto Refresh off" },
    { value: 30000, label: "1 minute" },
    { value: 300000, label: "5 minute" },
    { value: 600000, label: "10 minute" },
  ];
  const dispatch = useDispatch();

  function onChange(event: string) {
    setSelectEvent(event);
  }
  const refreshHandler = (e: number | string | unknown) => {
    setLocalStorage("autoReload", e);
    autoRefresh(e);
  };
  const reloadStatus: number | string | null =
    getLocalStorage("autoReload") !== null
      ? getLocalStorage("autoReload")
      : "off";

  useEffect(() => {
    if (reloadStatus !== "off" || reloadStatus !== null) {
      autoRefresh(reloadStatus);
    }
  }, [reloadStatus]);
  return (
    <Main>
      <Navbar title="Dashboard" />

      <Day>
        <Flex gap={5}>
          <CustomSelect
            option={refreshSelect}
            dValue={reloadStatus}
            width="170px"
            // placeholder="Auto Refresh off"
            change={refreshHandler}
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
          <CustomRadio value={1}>
            <Text>Include</Text>
          </CustomRadio>
          <CustomRadio value={2}>
            <Text>Exclude</Text>
          </CustomRadio>
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
            <Text size={12} $mb="10px">
              Driver option
            </Text>
            <CustomSelect option={option} placeholder="Cycle" />
          </div>
          <div>
            <Text size={12} $mb="10px">
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
