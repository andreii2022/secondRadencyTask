import React, { FC, ReactNode } from "react";
import { Table } from "react-bootstrap";

type TableProps = {
  headers: (string | ReactNode)[];
  children: ReactNode;
};

const CustomTable: FC<TableProps> = ({ headers, children }) => {
  return (
    <Table hover>
      <thead>
        <tr>
          {headers.map((el, i) => (
            <th scope="col" key={i} className="border px-4 py-2">
              {el}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </Table>
  );
};

export default CustomTable;
