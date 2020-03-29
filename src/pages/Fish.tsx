import React from "react";
import Table from "../components/Table";
import SavedDataProvider from "../context/savedDataContext";
import fish from "../data/fish.json";

interface Props {}

const Fish = (props: Props) => {
  return (
    <SavedDataProvider>
      <Table data={fish} name="fish" />
    </SavedDataProvider>
  );
};

export default Fish;
