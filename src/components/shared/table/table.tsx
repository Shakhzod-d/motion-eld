import React from "react";
import { TableSelect, TableWrapper } from "./table-styled";

interface SelectOption {
  value: string;
  label: string;
}

interface Column {
  key: string;
  title:
    | string
    | {
        type: "select";
        defaultValue: string;
        options?: SelectOption[];
        onChange: (value: string) => void;
      };
}

interface Options {
  key: string;
  text?: string | JSX.Element;
  icon?: JSX.Element;
  classname?: string;
  onclick?: (value: boolean) => void;
}

interface RowData {
  key: string;
  style?: React.CSSProperties;
  classname?: string;
  options: Options[];
}

interface TableProps {
  columns: Column[];
  data: RowData[];
  setOpen?: (value: string) => void;
  id?: string;
  style?: React.CSSProperties;
}

export const Table = ({ columns, data, setOpen, id, style }: TableProps) => {
  return (
    <TableWrapper id={id} style={style}>
      <thead>
        <tr onClick={() => setOpen?.("h")}>
          {columns.map(
            (col, index) => (
              console.log(col),
              (
                <th key={index}>
                  {typeof col.title === "string" ? (
                    <p>{col.title}</p>
                  ) : (
                    <TableSelect
                      defaultValue={col?.title.defaultValue}
                      options={col?.title?.options}
                    />
                  )}
                </th>
              )
            )
          )}
        </tr>
      </thead>
      <tbody>
        {data.map((row, ind) => (
          <tr key={ind} style={row?.style}>
            {row.options.map((item, index) => (
              <td key={index} className={item?.classname}>
                {item.icon && <span>{item.icon}</span>}
                <span>{item.text}</span>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </TableWrapper>
  );
};
