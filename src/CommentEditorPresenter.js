import React from "react";
import PropTypes from "prop-types";

import CommentForm from "./CommentForm";

const CommentEditorPresenter = ({ comment }) => {
  return <CommentForm initialValues={comment} disabledFields={["author"]} />;
};

CommentEditorPresenter.propTypes = {
  comment: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired
};

export default CommentEditorPresenter;
