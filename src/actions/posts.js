import {
  POSTS_FETCH_SUCCESS,
  POSTS_CHANGE_SORT_BY,
  POST_DELETE_SUCCESS,
  POST_UPVOTE_SUCCEEDED
} from "./types";

import { respToJSON, defaultOptions } from "./helpers";
import Ramda from "ramda";

const upVoteSucceeded = keyedPost => ({
  type: POST_UPVOTE_SUCCEEDED,
  payload: keyedPost
});

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

export const upVotePost = postId => dispatch => {
  const body = JSON.stringify({ option: "upVote" });

  return fetch(`/posts/${postId}`, { ...defaultOptions, method: "POST", body })
    .then(respToJSON)
    .then(post => {
      const keyed = Ramda.indexBy(Ramda.prop("id"), [post]);

      return dispatch(upVoteSucceeded(keyed));
    });
};
