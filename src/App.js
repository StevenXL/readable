import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import DefaultView from "./DefaultView";
import CategoryView from "./CategoryView";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={DefaultView} />
        <Route
          path="/:category"
          render={({ match }) =>
            <CategoryView category={match.params.category} />}
        />
      </Switch>
    );
  }
}

export default App;
