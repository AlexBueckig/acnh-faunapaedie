import React from "react";
import "./App.css";
import List from "./components/List/";
import fish from "./data/fish.json";

function App() {
  return (
    <div className="App">
      <List data={fish} />
    </div>
  );
}

export default App;
