import React from "react";

interface Props {}

const MonthColumnFilter = ({
  column: { filterValue, preFilteredRows, setFilter }
}: any) => {
  return (
    <select
      onChange={e => {
        setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
      }}
      value={filterValue}
    >
      <option value="">Alle</option>
      <option value="Januar">Januar</option>
      <option value="Februar">Februar</option>
      <option value="März">März</option>
      <option value="April">April</option>
      <option value="Mai">Mai</option>
      <option value="Juni">Juni</option>
      <option value="Juli">Juli</option>
      <option value="August">August</option>
      <option value="September">September</option>
      <option value="Oktober">Oktober</option>
      <option value="November">November</option>
      <option value="Dezember">Dezember</option>
    </select>
  );
};

export default MonthColumnFilter;
