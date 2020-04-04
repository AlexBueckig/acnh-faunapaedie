import React from "react";
import Container from "../components/Container";
import Table from "../components/Table";
import SavedDataProvider from "../context/savedDataContext";
import fish from "../data/fish.json";

interface Props {}

const Fish = (props: Props) => {
  return (
    <SavedDataProvider>
      <Container>
        <Table data={fish} name="fish" />
      </Container>
    </SavedDataProvider>
  );
};

export default Fish;
