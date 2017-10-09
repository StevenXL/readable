import React from "react";
import Ramda from "ramda";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getComment } from "./reducers";

import CommentEditorPresenter from "./CommentEditorPresenter";

const CommentEditorContainer = ({ comment }) => {
  return <CommentEditorPresenter comment={comment} />;
};

CommentEditorContainer.propTypes = {
  comment: PropTypes.shape({ id: PropTypes.string }).isRequired
};

const mapStateToProps = (state, ownProps) => {
  const commentId = Ramda.path(["location", "state", "commentId"], ownProps);
  const comment = getComment(state, commentId);

  return { comment };
};

export default connect(mapStateToProps, null)(CommentEditorContainer);
