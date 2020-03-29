import React from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { Fish, Insects } from "./pages/";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Route exact path="/">
          <Redirect to="/fish" />
        </Route>
        <Route path="/fish">
          <Fish />
        </Route>
        <Route path="/insects">
          <Insects />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
