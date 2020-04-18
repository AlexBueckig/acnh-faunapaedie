import dayjs from "dayjs";

const checkRange = (startMonth, endMonth, selectedMonth) => {
  let start = dayjs(startMonth, "MMMM");
  let end = dayjs(endMonth, "MMMM").endOf("month");
  let selected = dayjs(selectedMonth, "MMMM").add(1, "day");

  if (start.isAfter(end)) {
    end = end.add(1, "year");
    if (selected.isBefore(start)) {
      selected = selected.add(1, "year");
    }
  }

  return selected.isAfter(start) && selected.isBefore(end);
};

const dateInRange = (rows: any, id: any, filterValue: any) => {
  return rows.filter((row: any) => {
    if (row.values[id].length > 1) {
      if (Array.isArray(row.values[id][0])) {
        return (
          checkRange(row.values[id][0][0], row.values[id][0][1], filterValue) ||
          checkRange(row.values[id][1][0], row.values[id][1][1], filterValue)
        );
      } else {
        return checkRange(row.values[id][0], row.values[id][1], filterValue);
      }
    } else {
      console.log(row.values[id]);
      return (
        row.values[id][0] === "" ||
        row.values[id][0] === filterValue ||
        row.values[id][0] === "Das ganze Jahr über"
      );
    }
  });
};

export default dateInRange;
