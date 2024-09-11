import { CustomTable, ViolationsChart } from "../../components/shared";
import {
  CustomSelect,
  Drivers,
  Navbar,
  OverviewCard,
} from "../../components/ui";
import { btnArr, Main } from "../../utils/index";
// import {
//   ArrowIcon,
//   CardWrapper,
//   CustomBtn,
//   Day,
//   SelectWrapper,
//   TableWrapper,
//   Title,
// } from "./dashboard-styled;

import { dashboardProgressActive } from "../../store/booleans-slice";
import { useDispatch, useSelector } from "react-redux";
import { BiCalendarStar } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { Flex, Radio } from "antd";
import { dashboardTableHeader, dataSource, Text } from "../../utils/constants";
import { RootState } from "../../store/store";
import { ArrowIcon, CardWrapper, CustomBtn, Day, SelectWrapper, Title } from "./dashboard-styled";

export const Dashboard = () => {
  const active = useSelector(
    (state: RootState) => state.booleans.dashboardProgress
  );
  const sidebarActive = useSelector(
    (state: RootState) => state.booleans.sidebarActive
  );
  const option = [
    { value: "status", label: "Two-factures" },
    { value: "active", label: "Actice" },
    { value: "completed", label: "Completed" },
  ];
  const dispatch = useDispatch();

  return (
    <Main>
      <Navbar title="Dashboard" />
      <Day>
        <CustomBtn>
          <BiCalendarStar />
        </CustomBtn>
        {btnArr.map((item) => (
          <CustomBtn key={item.id}>{item.text}</CustomBtn>
        ))}
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
          <Radio value={1}>Include</Radio>
          <Radio value={2}>Exclude</Radio>
        </Radio.Group>
        <Flex gap={"small"} align="center" wrap={true}>
          <CustomSelect option={option} />
          <CustomSelect option={option} />
          <CustomSelect option={option} />
          <CustomSelect option={option} />
          <CustomSelect option={option} />
          <div>
            <Text size={12} $mb="10px" color="#2D2E2F">
              Driver option
            </Text>
            <CustomSelect option={option} />
          </div>
          <div>
            <Text size={12} $mb="10px" color="#2D2E2F">
              Driver option
            </Text>
            <CustomSelect
              option={[{ value: "order", label: "Order By" }]}
              width={126}
            />
          </div>
          <div>
            <Text size={12} $mb="20px"></Text>
            <CustomSelect
              option={[{ value: "direction", label: "direction" }]}
              width={126}
            />
          </div>
        </Flex>
      </SelectWrapper>
      <TableWrapper>
        <CustomTable
          columns={dashboardTableHeader}
          data={dataSource}
          colorId={2}
          itemColor="red"
        />
      </TableWrapper>
    </Main>
  );
};
