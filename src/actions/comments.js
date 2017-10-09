import Ramda from "ramda";
import {
  COMMENTS_FETCH_SUCCESS,
  COMMENT_DELETE_SUCCESS,
  COMMENT_VOTE_SUCCESS
} from "./types";

import { respToJSON, defaultOptions } from "./helpers";

const commentDeletedSuccess = comment => ({
  type: COMMENT_DELETE_SUCCESS,
  payload: { [comment.id]: comment }
});

const fetchCommentSuccess = comments => ({
  type: COMMENTS_FETCH_SUCCESS,
  payload: comments
});

const voteOnCommentSuccess = keyedComment => ({
  type: COMMENT_VOTE_SUCCESS,
  payload: keyedComment
});

export const fetchComments = postId => dispatch => {
  return fetch(`/posts/${postId}/comments`, defaultOptions)
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

const voteOnComment = voteOption => commentId => dispatch => {
  const body = JSON.stringify({ option: voteOption });

  return fetch(`/comments/${commentId}`, {
    ...defaultOptions,
    method: "POST",
    body
  })
    .then(respToJSON)
    .then(comment => {
      const keyed = Ramda.indexBy(Ramda.prop("id"), [comment]);

      return dispatch(voteOnCommentSuccess(keyed));
    });
};

export const upVoteComment = voteOnComment("upVote");

export const downVoteComment = voteOnComment("downVote");
