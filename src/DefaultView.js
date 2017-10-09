import React from "react";
import { Row, Col } from "react-bootstrap";
import PostsListContainer from "./PostsListContainer";
import PostForm from "./PostForm";

const DefaultView = () => {
  return (
    <span>
      <Row>
        <Col xs={12} className="text-center">
          <h1>Readable</h1>
          <p>Welcome to Readable</p>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <h3>Create a New Post</h3>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <PostForm />
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <h3>Listing All Posts</h3>
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
