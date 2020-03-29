import React from "react";
import Table from "../components/Table";
import SavedDataProvider from "../context/savedDataContext";
import insects from "../data/insects.json";

interface Props {}

const Insects = (props: Props) => {
  return (
    <SavedDataProvider>
      <Table data={insects} name="insects" />
    </SavedDataProvider>
  );
};

export default Insects;
