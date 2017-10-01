import { POSTS_FETCH_SUCCESS, POSTS_CHANGE_SORT_BY } from "./types";

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
