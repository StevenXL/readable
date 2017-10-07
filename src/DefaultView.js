import React from "react";
import { Route } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import CategoriesListContainer from "./CategoriesListContainer";
import PostsListContainer from "./PostsListContainer";
import NewPost from "./NewPost";

const DefaultView = () => {
  return (
    <span>
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
    </span>
  );
};

export default DefaultView;
