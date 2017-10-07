import Ramda from "ramda";
import { COMMENTS_FETCH_SUCCESS } from "./types";

import { respToJSON, defaultOptions } from "./helpers";

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
