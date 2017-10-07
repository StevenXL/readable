import React from "react";
import { Row, Col } from "react-bootstrap";

import PostForm from "./PostForm";
import CommentsListPresenter from "./CommentsListPresenter";

const PostViewPresenter = ({ post, comments }) => {
  return (
    <span>
      <Row>
        <Col xs={12}>
          <PostForm
            initialValues={post}
            disabledFields={["author", "category"]}
          />
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <CommentsListPresenter comments={comments} />
        </Col>
      </Row>
    </span>
  );
};

export default PostViewPresenter;
