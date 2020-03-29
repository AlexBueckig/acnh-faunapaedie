import React from "react";

interface Props {}

const DefaultColumnFilter = ({
  column: { filterValue, preFilteredRows, setFilter }
}: any) => {
  const count = preFilteredRows.length;

  return (
    <input
      value={filterValue || ""}
      onChange={e => {
        setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
      }}
      placeholder={`Durchsuche ${count} Einträge...`}
    />
  );
};

export default DefaultColumnFilter;
