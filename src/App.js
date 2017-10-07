import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Grid, Row, Col } from "react-bootstrap";

import DefaultView from "./DefaultView";
import CategoryView from "./CategoryView";

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <h1>Readable</h1>
          </Col>
        </Row>

        <Switch>
          <Route exact path="/" component={DefaultView} />
          <Route
            path="/:category"
            render={({ match }) =>
              <CategoryView category={match.params.category} />}
          />
        </Switch>
      </Grid>
    );
  }
}

export default App;
