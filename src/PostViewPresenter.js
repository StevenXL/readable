import React from "react";
import PropTypes from "prop-types";
import { Button, Row, Col } from "react-bootstrap";

import PostForm from "./PostForm";
import CommentsListPresenter from "./CommentsListPresenter";
import CommentForm from "./CommentForm";

const PostViewPresenter = ({ post, comments, deletePost }) => {
  return (
    <span>
      <Row>
        <Col xs={12}>
          <PostForm
            initialValues={post}
            disabledFields={["author", "category"]}
          />
        </Col>

        <Col xs={12}>
          <Button bsStyle="danger" onClick={deletePost}>
            Delete Post
          </Button>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <CommentsListPresenter comments={comments} />
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <CommentForm postId={post.id} />
        </Col>
      </Row>
    </span>
  );
};

PostViewPresenter.propTypes = {
  post: PropTypes.shape({ title: PropTypes.string.isRequired }).isRequired,
  comments: PropTypes.array.isRequired,
  deletePost: PropTypes.func.isRequired
};

export default PostViewPresenter;