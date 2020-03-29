import React from "react";
import { useFilters, useTable } from "react-table";
import { useSavedData } from "../../hooks";
import { DefaultCell, GefangenCell, MonthCell } from "./Cells";
import {
  BooleanColumnFilter,
  DefaultColumnFilter,
  MonthColumnFilter
} from "./Filter/";
import styles from "./Table.module.scss";
import { dateInRange, isTrue } from "./utils";

const filterSelector = (name: string) => {
  switch (name) {
    case "Monat":
      return MonthColumnFilter;
    case "Name":
      return DefaultColumnFilter;
    case "Gefangen":
      return BooleanColumnFilter;
    default:
      return () => null;
  }
};

const filterFunctionSelector = (name: string) => {
  switch (name) {
    case "Monat":
      return dateInRange;
    case "Name":
      return "fuzzytext";
    case "Gefangen":
      return isTrue;
    default:
      return null;
  }
};

const getCellRenderer = (name: string) => {
  switch (name) {
    case "Monat":
    case "Uhrzeit":
      return MonthCell;
    case "Gefangen":
      return GefangenCell;
    default:
      return DefaultCell;
  }
};

interface Props {
  data: any[];
  name: string;
}

const Table = ({ data: list, name }: Props) => {
  const { savedData } = useSavedData();

  const data = React.useMemo(() => {
    return list.map(item => {
      return { Gefangen: savedData[item.Name] !== undefined, ...item };
    });
  }, [list, savedData]);

  const columns = React.useMemo(
    () =>
      Object.keys(data[0]).map((key, index) => ({
        Header: key,
        accessor: key,
        Filter: filterSelector(key),
        filter: filterFunctionSelector(key),
        Cell: getCellRenderer(key)
      })),
    [data]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    visibleColumns
  } = useTable({ data, columns }, useFilters);

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any) => (
              <th {...column.getHeaderProps()}>
                {column.render("Header")}
                {/* Render the columns filter UI */}
                <div>{column.canFilter ? column.render("Filter") : null}</div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr className={styles["table__tr"]} {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td className={styles.cell} {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
