import React from "react";
import Ramda from "ramda";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { getActiveComment } from "./reducers";

import CommentEditorPresenter from "./CommentEditorPresenter";

const CommentEditorContainer = ({ comment }) => {
  return comment
    ? <CommentEditorPresenter comment={comment} />
    : <Redirect to="/" />;
};

CommentEditorContainer.defaultProps = { comment: null };

CommentEditorContainer.propTypes = {
  comment: PropTypes.shape({ id: PropTypes.string })
};

const mapStateToProps = (state, ownProps) => {
  const commentId = Ramda.path(["location", "state", "commentId"], ownProps);
  const comment = getActiveComment(state, commentId);

  return { comment };
};

export default connect(mapStateToProps, null)(CommentEditorContainer);
