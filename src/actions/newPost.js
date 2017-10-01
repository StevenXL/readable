import {
  NEW_POST_CHANGE,
  NEW_POST_SUBMITTED,
  NEW_POST_SUBMITTED_SUCCESS
} from "./types";
import { respToJSON, defaultOptions } from "./helpers";
import { createPostForSubmission } from "../utilities";

export const newPostSubmitted = () => ({ type: NEW_POST_SUBMITTED });

export const newPostSucceeded = persistedPost => ({
  type: NEW_POST_SUBMITTED_SUCCESS,
  payload: persistedPost
});

export const newPostChange = (field, value) => ({
  type: NEW_POST_CHANGE,
  payload: { field, value }
});

export const submitNewPost = newPost => dispatch => {
  dispatch(newPostSubmitted());

  const data = createPostForSubmission(newPost);

  return fetch("/posts", {
    ...defaultOptions,
    body: JSON.stringify(data),
    method: "POST"
  })
    .then(respToJSON)
    .then(persistedPost => {
      const keyed = { [persistedPost.id]: persistedPost };

      dispatch(newPostSucceeded(keyed));
    });
};
