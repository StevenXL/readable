import {
  POST_FORM_CHANGE,
  POST_FORM_SUBMITTED,
  POST_FORM_SUBMITTED_SUCCESS
} from "./types";
import { respToJSON, defaultOptions } from "./helpers";
import { createPostForSubmission } from "../utilities";

export const postFormSubmitted = () => ({ type: POST_FORM_SUBMITTED });

export const postFormSucceeded = persistedPost => ({
  type: POST_FORM_SUBMITTED_SUCCESS,
  payload: persistedPost
});

export const postFormChange = (field, value) => ({
  type: POST_FORM_CHANGE,
  payload: { field, value }
});

export const submitPostForm = postForm => dispatch => {
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
