import Ramda from "ramda";

import {
  COMMENT_FORM_SET_INITIAL_VALUES,
  COMMENT_FORM_POST_SUCCESS,
  COMMENT_FORM_CHANGED,
  COMMENT_FORM_PUT_SUCCESS
} from "./types";

import { respToJSON, defaultOptions } from "./helpers";

import {
  createCommentForPostSubmission,
  createCommentForPutSubmission
} from "../utilities";

const putCommentSucceeded = comment => ({
  type: COMMENT_FORM_PUT_SUCCESS,
  payload: comment
});

const postCommentSucceeded = comment => ({
  type: COMMENT_FORM_POST_SUCCESS,
  payload: comment
});

export const postCommentForm = commentForm => dispatch => {
  const prepared = createCommentForPostSubmission(commentForm);
  const body = JSON.stringify(prepared);

  return fetch("/comments", { ...defaultOptions, method: "POST", body })
    .then(respToJSON)
    .then(persistedComment => {
      const keyed = Ramda.indexBy(Ramda.prop("id"), [persistedComment]);

      dispatch(postCommentSucceeded(keyed));
    });
};

export const putCommentForm = commentForm => dispatch => {
  const prepared = createCommentForPutSubmission(commentForm);

  const body = JSON.stringify(prepared);

  return fetch(`/comments/${commentForm.id}`, {
    ...defaultOptions,
    method: "PUT",
    body
  })
    .then(respToJSON)
    .then(comment => {
      const keyed = Ramda.indexBy(Ramda.prop("id"), [comment]);
      return dispatch(putCommentSucceeded(keyed));
    });
};

export const commentFormChanged = changeset => ({
  type: COMMENT_FORM_CHANGED,
  payload: changeset
});

export const setInitialValues = initialValues => ({
  type: COMMENT_FORM_SET_INITIAL_VALUES,
  payload: initialValues
});
