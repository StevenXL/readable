import {
  POSTS_FETCH_SUCCESS,
  POSTS_CHANGE_SORT_BY,
  POST_DELETE_SUCCESS
} from "./types";

import { respToJSON, defaultOptions } from "./helpers";
import Ramda from "ramda";

const fetchPostsSuccess = posts => ({
  type: POSTS_FETCH_SUCCESS,
  payload: posts
});

export const fetchPosts = () => dispatch => {
  return fetch("/posts", defaultOptions).then(respToJSON).then(posts => {
    const keyed = Ramda.indexBy(Ramda.prop("id"), posts);

    dispatch(fetchPostsSuccess(keyed));
  });
};

export const changePostsSortBy = sortBy => ({
  type: POSTS_CHANGE_SORT_BY,
  payload: sortBy
});

const deletePostSuccess = postId => ({
  type: POST_DELETE_SUCCESS,
  payload: postId
});

export const deletePost = postId => dispatch => {
  return fetch(`/posts/${postId}`, {
    ...defaultOptions,
    method: "DELETE"
  }).then(() => dispatch(deletePostSuccess(postId)));
};
