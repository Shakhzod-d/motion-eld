import { useState } from "react";
import { TablePopup } from "../../ui";
import {
  StatusBadge,
  TableContainer,
  TableData,
  TableElement,
  TableHeader,
  TableRow,
} from "./custom-styled";
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
}

export const CustomTable = ({
  columns,
  data,
  colorId,
  itemColor,
}: TableProps) => {
  const color = itemColor ? itemColor : "";
  const [PopupActive, setPopupActive] = useState<number | null>(null);
  const PopupOpen = (index: number | null) => {
    if (index == PopupActive) {
      setPopupActive(null);
    } else {
      setPopupActive(index);
    }
  };
  return (
    <TableContainer>
      <TableElement>
        <thead>
          <tr>
            {columns.map((column) => (
              <TableHeader key={column.accessor}>{column.header}</TableHeader>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <TableRow key={index}>
              {columns.map((column) => (
                <TableData
                  key={column.accessor}
                  color={column.id == colorId ? color : ""}
                  onClick={() => column.accessor == "dots" && PopupOpen(index)}
                >
                  {column.accessor === "status" ? (
                    <StatusBadge $status={row[column.accessor]}>
                      {row[column.accessor]}
                    </StatusBadge>
                  ) : (
                    row[column.accessor]
                  )}
                  {column.accessor == "dots"
                    ? PopupActive == index && <TablePopup />
                    : ""}
                </TableData>
              ))}
            </TableRow>
          ))}
        </tbody>
      </TableElement>
    </TableContainer>
  );
};
