import { Card, CardsTop } from "./info-table-styled";
import { Flex } from "antd";
import { Text } from "../../../utils/constants";

interface Header {
  header: string;
  accessor: string;
}

interface Prop {
  header: Header[];
  data: object[];
  editData?: (id: string) => void;
  onClick?: (id: string) => void;
}

interface Data {
  [key: string]: {
    label?: string;
    data?: { id: number; text: string; icon?: React.ReactElement | string }[];
  };
}

interface RowData {
  label?: string;
  img?: string;
  data?: { id: number; text: string; icon?: React.ReactElement | string }[];
}

export const InfoTable = ({ header, data, editData, onClick }: Prop) => {
  const edit = (id: string, event: React.MouseEvent) => {
    // Edit tugmasi bosilganda hodisani to'xtatamiz
    event.stopPropagation();
    if (editData) {
      editData(id);
    }
  };

  return (
    <>
      <CardsTop>
        {header.map((item, i) => (
          <p key={i}>{item.header}</p>
        ))}
      </CardsTop>

      {data.map((item, i) => (
        <Card key={i} onClick={() => onClick && onClick(String(item.id))}>
          {header.map((row, ind) => {
            const Header = row.accessor;
            const Item: Data = item;
            const rowData: RowData = Item[Header];

            return (
              <div key={ind}>
                <Flex gap={"small"} align="center">
                  <img src={rowData?.img} alt="" />
                  <Text
                    color={
                      rowData?.label === "Active"
                        ? "#32BE61"
                        : rowData?.label === "Edit"
                        ? "#FC973A"
                        : ""
                    }
                    $mb="5px"
                    size={ind === 0 ? 20 : 16}
                    onClick={(e) =>
                      rowData?.label === "Edit"
                        ? edit(String(item._id), e)
                        : null
                    }
                  >
                    {rowData?.label ? rowData.label : ""}
                  </Text>
                </Flex>

                <Flex
                  vertical={true}
                  gap={"small"}
                  style={{
                    marginLeft: ind === 0 ? "40px" : "",
                  }}
                >
                  {rowData?.data?.map((c) => {
                    const Icon: JSX.Element | string | null = c.icon || null;
                    return (
                      <Flex gap={"small"} key={c.id}>
                        {Icon}

                        <Text
                          $font="400"
                          size={14}
                          color={c.text === "Active" ? "red" : ""}
                          key={c.id}
                        >
                          {c.text}
                        </Text>
                      </Flex>
                    );
                  })}
                </Flex>
              </div>
            );
          })}
        </Card>
      ))}
    </>
  );
};
