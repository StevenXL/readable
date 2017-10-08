import Ramda from "ramda";

import {
  COMMENT_FORM_POST_SUCCESS,
  COMMENTS_FETCH_SUCCESS
} from "../actions/types";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_FORM_POST_SUCCESS:
    case COMMENTS_FETCH_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

// selectors

export const getCommentsForPost = (comments, postId) => {
  const commentsArr = Ramda.values(comments);

  return Ramda.filter(comment => comment.parentId === postId, commentsArr);
};
