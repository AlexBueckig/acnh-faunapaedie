const isTrue = (rows: any, id: any, filterValue: any) => {
  return rows.filter(row => {
    if (filterValue !== "") {
      return row.original[id] === (filterValue === id[0]);
    } else {
      return true;
    }
  });
};

export default isTrue;
