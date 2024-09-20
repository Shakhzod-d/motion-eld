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
  onClick?: <T>(id: T) => void;
}

export const CustomTable = ({
  columns,
  data,
  colorId,
  itemColor,
  onClick,
}: TableProps) => {
  const color = itemColor ? itemColor : "";
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
    if (index == PopupActive) {
      setPopupActive(null);
    } else {
      setPopupActive(index);
    }
  }

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
                  onClick={() => tableDataHandler(index, column.accessor)}
                >
                  {column?.accessor === "status" ? (
                    <StatusBadge $status={row[column?.accessor]}>
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
