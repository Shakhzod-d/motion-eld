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
  status: string;
};

interface TableColumn {
  header: string | JSX.Element;
  accessor: string;
}

interface TableProps {
  columns: TableColumn[];
  data: CustomObject[];
}

export const CustomTable = ({ columns, data }: TableProps) => {
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
                  color={
                    column.accessor == "week"
                      ? "#3DA8D5"
                      : column.accessor == "warnings" ||
                        column.accessor == "error"
                      ? "red"
                      : ""
                  }
                >
                  {column.accessor === "status" ? (
                    <StatusBadge $status={row[column.accessor]}>
                      {row[column.accessor]}
                    </StatusBadge>
                  ) : (
                    row[column.accessor]
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
