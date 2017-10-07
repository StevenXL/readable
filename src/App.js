import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Grid, Row, Col } from "react-bootstrap";

import DefaultView from "./DefaultView";
import CategoryView from "./CategoryView";
import PostView from "./PostView";

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
            path="/posts/:postId"
            render={({ match }) => <PostView postId={match.params.postId} />}
          />

          <Route
            path="/:category"
            render={({ match }) =>
              <CategoryView category={match.params.category} />}
          />
          <Redirect to="/" />
        </Switch>
      </Grid>
    );
  }
}

export default App;
