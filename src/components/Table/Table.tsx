import React, { useRef } from "react";
import { useColumnOrder, useFilters, useTable } from "react-table";
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
  const skipPageResetRef = useRef(false);

  const data = React.useMemo(() => {
    skipPageResetRef.current = true;
    return list.map(item => {
      return { Gefangen: savedData[item.Name] !== undefined, ...item };
    });
  }, [list, savedData]);

  React.useEffect(() => {
    skipPageResetRef.current = false;
  }, [data]);

  const columns = React.useMemo(
    () =>
      Object.keys(data[0]).map((key, index) => ({
        Header: key,
        accessor: key,
        Filter: filterSelector(key),
        filter: filterFunctionSelector(key),
        Cell: getCellRenderer(key),
        maxWidth: 100
      })),
    [data]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setColumnOrder,
    setHiddenColumns
  } = useTable(
    {
      data,
      columns,
      // @ts-ignore
      autoResetPage: !skipPageResetRef.current,
      autoResetFilters: !skipPageResetRef.current
    },
    useFilters,
    useColumnOrder
  );

  React.useEffect(() => {
    setHiddenColumns([]);
    setColumnOrder([
      "Gefangen",
      "Name",
      "Monat",
      "Fundort",
      "Größe",
      "Uhrzeit",
      "Wert"
    ]);
  }, [setHiddenColumns, setColumnOrder]);

  return (
    <table className={styles.table} {...getTableProps()}>
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
