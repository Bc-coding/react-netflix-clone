import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import SearchMain from "./SearchMain";
import SingleMovie from "./SingleMovie";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/search">
        <SearchMain />
      </Route>
      <Route path="/movies/:id" children={<SingleMovie />} />
    </Switch>
  );
}

export default App;
