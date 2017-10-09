import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

import CommentForm from "./CommentForm";

const CommentEditorPresenter = ({ comment }) => {
  return (
    <span>
      <Row>
        <Col xs={12} className="text-center">
          <h3>Viewing Comment</h3>
        </Col>
      </Row>
      <CommentForm initialValues={comment} disabledFields={["author"]} />
    </span>
  );
};

CommentEditorPresenter.propTypes = {
  comment: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired
};

export default CommentEditorPresenter;
