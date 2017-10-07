import Ramda from "ramda";

import { COMMENTS_FETCH_SUCCESS } from "../actions/types";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
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
