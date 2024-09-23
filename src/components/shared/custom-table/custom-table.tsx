import { useState } from "react";
import { TablePopup } from "../../ui";
import {
  BorderLBottom,
  BorderLTop,
  BorderRBottom,
  BorderRTop,
  StatusBadge,
  TableContainer,
  TableData,
  TableElement,
  TableHeader,
  TableRow,
} from "./custom-styled";

import { GoCopy } from "react-icons/go";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Text } from "../../../utils/constants";
type CustomObject = {
  [key: string]: string | number | JSX.Element;
  // $status?: string;
};

interface TableColumn {
  header: string | JSX.Element;
  accessor: string;
  id?: number;
}

interface TableProps {
  columns: TableColumn[];
  data: CustomObject[];
  itemColor?: string | undefined;
  colorId?: number | string;
  onClick?: <T>(id: T) => void;
  copyId?: number;
}

const status = ["sb", "off", "dr", "on"];
export const CustomTable = ({
  columns,
  data,
  onClick,
  copyId = 0,
}: TableProps) => {
  const [PopupActive, setPopupActive] = useState<
    number | null | string | undefined
  >(null);

  function tableDataHandler<T>(
    id: number | string | undefined,
    text?: T
  ): void {
    if (onClick) {
      onClick(id);
    }
    if (text == "dots") {
      PopupOpen(id);
    }
  }
  function PopupOpen<T extends number | null | string | undefined>(index: T) {
    console.log(index);
    if (index == PopupActive) {
      setPopupActive(null);
    } else {
      setPopupActive(index);
    }
  }
  function colorFun<T>(text: T, title: T): string {
    let color: string = "";

    if (title == "updated" || title == "location_date") return "#3DA8D5";
    if (title == "warnings" || title == "error") return "red";

    switch (text) {
      case "connected":
        color = "#32BE61";
        break;
      case "not connected":
        color = "red";
        break;
      case "form & signature":
        color = "#FC973A";
        break;
      case "violation":
        color = "red";
        break;
      default:
        color = "";
        break;
    }
    return color;
  }

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success("copy added");
    });
  };

  return (
    <TableContainer>
      <ToastContainer />
      <TableElement>
        <thead>
          <tr>
            {columns.map((column) => (
              <TableHeader key={column.accessor}>{column.header}</TableHeader>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, element) => (
            <TableRow key={element}>
              {columns.map((column, index) => (
                <TableData
                  className={
                    column.accessor.toLowerCase() == "warnings" &&
                    "table_hover_elm "
                  }
                  key={column.accessor}
                  color={colorFun(
                    row[column?.accessor]?.valueOf().toString().toLowerCase(),
                    column.accessor.toLowerCase()
                  )}
                  // onClick={() => tableDataHandler(element, column.accessor)}
                >
                  {index == 0 && (
                    <>
                      <BorderLBottom></BorderLBottom>
                      <BorderLTop></BorderLTop>
                    </>
                  )}
                  {column.accessor.toLowerCase() == "warnings" && (
                    <div className="hover_container">
                      <Text $font="600">1. Shift limit</Text>
                      <Text $font="600">2. Cycle limit</Text>
                      <Text $font="600">3. No signature</Text>
                    </div>
                  )}
                  {columns.length - 1 == index && (
                    <>
                      <BorderRTop></BorderRTop>
                      <BorderRBottom></BorderRBottom>
                    </>
                  )}
                  {status.includes(
                    String(row[column?.accessor]).toLowerCase()
                  ) ? (
                    <StatusBadge $status={row[column?.accessor]}>
                      {row[column.accessor]}
                    </StatusBadge>
                  ) : (
                    row[column.accessor]
                  )}
                  {PopupActive == column.id ? <TablePopup /> : ""}
                  {copyId == column.id ? (
                    <GoCopy
                      style={{ marginLeft: "20px " }}
                      onClick={() => handleCopy(String(row[column.accessor]))}
                    />
                  ) : (
                    ""
                  )}
                </TableData>
              ))}
            </TableRow>
          ))}
        </tbody>
      </TableElement>
    </TableContainer>
  );
};
