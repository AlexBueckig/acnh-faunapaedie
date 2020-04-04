import React from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import styles from "./App.module.scss";
import Header from "./components/Header";
import { Fish, Insects } from "./pages/";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <main>
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
      </main>
    </div>
  );
}

export default App;
