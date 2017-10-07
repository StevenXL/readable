import React from "react";
import { Route } from "react-router-dom";
import { Grid, Row, Col } from "react-bootstrap";
import CategoriesListContainer from "./CategoriesListContainer";
import PostsListContainer from "./PostsListContainer";
import NewPost from "./NewPost";

const DefaultView = () => {
  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <h1>Readable</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <CategoriesListContainer />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <NewPost />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Route path="/:category?" component={PostsListContainer} />
        </Col>
      </Row>
    </Grid>
  );
};

export default DefaultView;
