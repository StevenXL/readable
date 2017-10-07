import {
  POST_FORM_CHANGE,
  POST_FORM_SUBMITTED,
  POST_FORM_POST_SUCCESS,
  POST_FORM_PUT_SUCCESS,
  RESET_FORM,
  POST_FORM_SET_INITIAL_VALUES as SET_INITIAL_VALUES
} from "./types";
import { respToJSON, defaultOptions } from "./helpers";
import { createPostForSubmission } from "../utilities";

export const postFormSubmitted = () => ({ type: POST_FORM_SUBMITTED });

export const postFormSucceeded = persistedPost => ({
  type: POST_FORM_POST_SUCCESS,
  payload: persistedPost
});

export const putFormSucceeded = persistedPost => ({
  type: POST_FORM_PUT_SUCCESS,
  payload: persistedPost
});

export const postFormChange = (field, value) => ({
  type: POST_FORM_CHANGE,
  payload: { field, value }
});

export const postPostForm = postForm => dispatch => {
  dispatch(postFormSubmitted());

  const data = createPostForSubmission(postForm);

  return fetch("/posts", {
    ...defaultOptions,
    body: JSON.stringify(data),
    method: "POST"
  })
    .then(respToJSON)
    .then(persistedPost => {
      const keyed = { [persistedPost.id]: persistedPost };

      dispatch(postFormSucceeded(keyed));
    });
};

export const putPostForm = postForm => dispatch => {
  dispatch(postFormSubmitted());

  const data = createPostForSubmission(postForm);

  return fetch(`/posts/${postForm.id}`, {
    ...defaultOptions,
    body: JSON.stringify(data),
    method: "PUT"
  })
    .then(respToJSON)
    .then(persistedPost => {
      const keyed = { [persistedPost.id]: persistedPost };

      dispatch(putFormSucceeded(keyed));
    });
};

export const setInitialValues = initialValues => ({
  type: SET_INITIAL_VALUES,
  payload: initialValues
});

export const resetForm = () => ({ type: RESET_FORM });
