import React from "react";
import { Row, Col } from "react-bootstrap";
import CategoriesListContainer from "./CategoriesListContainer";
import PostsListContainer from "./PostsListContainer";
import PostForm from "./PostForm";

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
          <PostForm />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <PostsListContainer />
        </Col>
      </Row>
    </span>
  );
};

export default DefaultView;
