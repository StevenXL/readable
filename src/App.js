import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Grid, Row, Col } from "react-bootstrap";

import DefaultView from "./DefaultView";
import CategoryView from "./CategoryView";
import PostViewContainer from "./PostViewContainer";
import CommentEditorContainer from "./CommentEditorContainer";

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
          <Route path="/comment/edit" component={CommentEditorContainer} />

          <Route exact path="/" component={DefaultView} />

          <Route
            exact
            path="/:category"
            render={({ match }) =>
              <CategoryView category={match.params.category} />}
          />

          <Route
            path="/:category/:postId"
            render={({ match }) =>
              <PostViewContainer postId={match.params.postId} />}
          />

          <Redirect to="/" />
        </Switch>
      </Grid>
    );
  }
}

export default App;
