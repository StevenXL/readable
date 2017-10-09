import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

import PostForm from "./PostForm";
import CommentsListPresenter from "./CommentsListPresenter";
import CommentForm from "./CommentForm";

const PostViewPresenter = ({
  post,
  comments,
  deletePost,
  upVotePost,
  downVotePost
}) => {
  return (
    <span>
      <Row>
        <Col xs={12} className="text-center">
          <h3>Viewing Post</h3>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <PostForm
            deletePost={deletePost}
            upVotePost={upVotePost}
            downVotePost={downVotePost}
            initialValues={post}
            disabledFields={["author", "category"]}
          />
        </Col>
      </Row>

      <Row>
        <Col xs={12} className="text-center">
          <h3>Comments for Post</h3>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <CommentsListPresenter comments={comments} />
        </Col>
      </Row>

      <Row>
        <Col xs={12} className="text-center">
          <h3>Create a New Comment</h3>
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
  deletePost: PropTypes.func.isRequired,
  upVotePost: PropTypes.func.isRequired,
  downVotePost: PropTypes.func.isRequired
};

export default PostViewPresenter;
