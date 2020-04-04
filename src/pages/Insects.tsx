import React from "react";
import Container from "../components/Container";
import Table from "../components/Table";
import SavedDataProvider from "../context/savedDataContext";
import insects from "../data/insects.json";

interface Props {}

const Insects = (props: Props) => {
  return (
    <SavedDataProvider>
      <Container>
        <Table data={insects} name="insects" />
      </Container>
    </SavedDataProvider>
  );
};

export default Insects;
