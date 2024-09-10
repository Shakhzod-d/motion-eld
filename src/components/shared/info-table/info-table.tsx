import { useState } from "react";
import { BtnGroup, Card, CardsTop } from "./info-table-styled";
import { Button, Flex, Modal } from "antd";
import { Text } from "../../../utils/constants";
interface Header {
  header: string;
  accessor: string;
}
interface Name {
  label?: string;
  img?: string;
  data?: { id: number; text: string; icon?: React.ReactElement|string }[];
}

interface DataType {
  [key: string]: Name; 
}

interface Prop {
  header: Header[];
  data: DataType[]; 
  
}

interface Data {
  [key: string]: {
    label?: string;
    data?: { id: number; text: string; icon?: React.ReactElement|string }[];
  };
}

interface RowData {
  label?: string;
  img?: string;
  data?: { id: number; text: string; icon?: React.ReactElement|string }[];
}
export const InfoTable = ({ header, data }: Prop) => {
  const [open, setOpen] = useState<boolean>(false);

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
      <Modal
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <BtnGroup className="close-btns">
          <Button className="btn-default">Clear Form</Button>
          <div>
            <Button className="btn-default" onClick={() => setOpen(false)}>
              Close
            </Button>
            <Button className="btn-primary" onClick={() => setOpen(false)}>
              Save
            </Button>
          </div>
        </BtnGroup>
      </Modal>
    </>
  );
};
