import Ramda from "ramda";
import { COMMENTS_FETCH_SUCCESS, COMMENT_DELETE_SUCCESS } from "./types";

import { respToJSON, defaultOptions } from "./helpers";

const commentDeletedSuccess = comment => ({
  type: COMMENT_DELETE_SUCCESS,
  payload: { [comment.id]: comment }
});

const fetchCommentSuccess = comments => ({
  type: COMMENTS_FETCH_SUCCESS,
  payload: comments
});

export const fetchComments = postId => dispatch => {
  return fetch(`${postId}/comments`, defaultOptions)
    .then(respToJSON)
    .then(comments => {
      const keyed = Ramda.indexBy(Ramda.prop("id"), comments);
      dispatch(fetchCommentSuccess(keyed));
    });
};

export const deleteComment = commentId => dispatch => {
  return fetch(`/comments/${commentId}`, {
    ...defaultOptions,
    method: "DELETE"
  })
    .then(respToJSON)
    .then(comment => dispatch(commentDeletedSuccess(comment)));
};
