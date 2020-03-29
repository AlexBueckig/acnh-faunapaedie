import React from "react";

interface Props {
  data: any;
}

const List = ({ data }: Props) => {
  return (
    <div>
      {Object.keys(data).map(name => (
        <p>{name}</p>
      ))}
    </div>
  );
};

export default List;
