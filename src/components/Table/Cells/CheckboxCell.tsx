import React from "react";

const CheckboxCell: React.FC<any> = ({ onChange, ...props }) => {
  const { indeterminate, ...row } = props.getToggleRowSelectedProps();

  if (props.id === "0") {
    console.log(props);
    console.log(props.getToggleRowSelectedProps());
    console.log(row);
  }

  return (
    <>
      <input type="checkbox" {...row} />
    </>
  );
};

export default CheckboxCell;
