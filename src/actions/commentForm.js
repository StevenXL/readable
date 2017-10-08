import Ramda from "ramda";

import {
  COMMENT_FORM_POST_SUCCESS,
  COMMENT_FORM_MOUNTED,
  COMMENT_FORM_CHANGED
} from "./types";

import { respToJSON, defaultOptions } from "./helpers";

import { createCommentForSubmission } from "../utilities";

const postCommentSucceeded = comment => ({
  type: COMMENT_FORM_POST_SUCCESS,
  payload: comment
});

export const postCommentForm = commentForm => dispatch => {
  const prepared = createCommentForSubmission(commentForm);
  const body = JSON.stringify(prepared);

  return fetch("/comments", { ...defaultOptions, method: "POST", body })
    .then(respToJSON)
    .then(persistedComment => {
      const keyed = Ramda.indexBy(Ramda.prop("id"), [persistedComment]);

      dispatch(postCommentSucceeded(keyed));
    });
};

export const commentFormMounted = postId => ({
  type: COMMENT_FORM_MOUNTED,
  payload: { parentId: postId }
});

export const commentFormChanged = changeset => ({
  type: COMMENT_FORM_CHANGED,
  payload: changeset
});
