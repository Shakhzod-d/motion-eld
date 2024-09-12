import { Card, CardsTop } from "./info-table-styled";
import { Flex } from "antd";
import { Text } from "../../../utils/constants";
interface Header {
  header: string;
  accessor: string;
}
interface Name {
  label?: string;
  img?: string;
  data?: { id: number; text: string; icon?: React.ReactElement | string }[];
}

interface DataType {
  [key: string]: Name;
}

interface Prop {
  header: Header[];
  data: DataType[];
  editData?: (id: number) => void ;
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
export const InfoTable = ({ header, data, editData }: Prop) => {
  const edit =(id:number)=>{
    if(editData){
      editData(id)
    }
  }
  return (
    <>
      <CardsTop>
        {header.map((item, i) => (
          <p key={i}>{item.header}</p>
        ))}
      </CardsTop>

      {data.map((item, i) => (
        <Card key={i}>
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
                      rowData?.label == "Active"
                        ? "#32BE61"
                        : rowData?.label == "Edit"
                        ? "#FC973A"
                        : "#000"
                    }
                    $mb="5px"
                    size={ind == 0 ? 20 : 16}
                    onClick={()=>rowData?.label =="Edit"? edit(1):null}
                  >
                    {rowData?.label ? rowData.label : ""}
                  </Text>
                </Flex>

                <Flex
                  vertical={true}
                  gap={"small"}
                  style={{
                    marginLeft: ind == 0 ? "40px" : "",
                  }}
                >
                  {rowData?.data?.map((c) => {
                    const Icon: JSX.Element | string | null = c.icon || null;
                    return (
                      <Flex gap={"small"} key={c.id}>
                        {Icon}

                        <Text
                          size={14}
                          color={c.text == "Active" ? "red" : ""}
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
