import React from "react";

interface Props {}

const BooleanColumnFilter = ({
  column: { filterValue, preFilteredRows, setFilter }
}: any) => {
  const count = preFilteredRows.length;

  return (
    <select
      onChange={e => {
        setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
      }}
      value={filterValue}
    >
      <option value="">Alle</option>
      <option value="Gefangen">gefangen</option>
      <option value="ngefangen">nicht gefangen</option>
    </select>
  );
};

export default BooleanColumnFilter;
