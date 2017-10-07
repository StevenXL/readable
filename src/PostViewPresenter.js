import React from "react";
import { Row, Col } from "react-bootstrap";

import PostForm from "./PostForm";

const PostViewPresenter = ({ post }) => {
  return (
    <Row>
      <Col xs={12}>
        <PostForm
          initialValues={post}
          disabledFields={["author", "category"]}
        />
      </Col>
    </Row>
  );
};

export default PostViewPresenter;
