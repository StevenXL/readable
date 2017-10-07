import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import DefaultView from "./DefaultView";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={DefaultView} />
      </Switch>
    );
  }
}

export default App;
