import React from "react";

const MonthCell = cellinfo => {
  if (Array.isArray(cellinfo.cell.value)) {
    if (Array.isArray(cellinfo.cell.value[0])) {
      return (
        <span>
          {cellinfo.cell.value[0].join(" - ")}
          <br />
          {cellinfo.cell.value[1].join(" - ")}
        </span>
      );
    }
    return <span>{cellinfo.cell.value.join(" - ")}</span>;
  } else {
    return <span>{cellinfo.cell.value}</span>;
  }
};

export default MonthCell;
