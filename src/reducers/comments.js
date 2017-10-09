import Ramda from "ramda";

import {
  COMMENT_FORM_PUT_SUCCESS,
  COMMENT_FORM_POST_SUCCESS,
  COMMENTS_FETCH_SUCCESS,
  COMMENT_DELETE_SUCCESS,
  COMMENT_VOTE_SUCCESS
} from "../actions/types";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_VOTE_SUCCESS:
    case COMMENT_FORM_PUT_SUCCESS:
    case COMMENT_DELETE_SUCCESS:
    case COMMENT_FORM_POST_SUCCESS:
    case COMMENTS_FETCH_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

// selectors

export const getActiveCommentsForPost = (comments, postId) => {
  const commentsArr = Ramda.values(comments);

  const activeComments = Ramda.filter(
    comment => comment.deleted === false,
    commentsArr
  );

  return Ramda.filter(comment => comment.parentId === postId, activeComments);
};

export const getComment = (state, commentId) => state[commentId];
