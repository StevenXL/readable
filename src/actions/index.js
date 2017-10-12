import { getPosts } from "../reducers";
import { fetchCategories } from "./categories";
import {
  fetchPosts,
  changePostsSortBy,
  deletePost,
  upVotePost,
  downVotePost
} from "./posts";
import {
  fetchComments,
  deleteComment,
  upVoteComment,
  downVoteComment
} from "./comments";
import {
  postCommentForm,
  putCommentForm,
  commentFormChanged,
  setInitialValues as setCommentFormInitialValues
} from "./commentForm";
import {
  postFormChange,
  postPostForm,
  putPostForm,
  setInitialValues,
  resetForm
} from "./postForm";

const getPostsThenComments = () => (dispatch, getState) => {
  const fetchAllComments = () => {
    const posts = getPosts(getState());
    const postIds = posts.map(post => post.id);

    return Promise.all(postIds.map(postId => fetchComments(postId)(dispatch)));
  };

  return fetchPosts()(dispatch).then(fetchAllComments);
};

export {
  changePostsSortBy,
  commentFormChanged,
  deletePost,
  fetchCategories,
  fetchComments,
  fetchPosts,
  postCommentForm,
  postFormChange,
  postPostForm,
  putCommentForm,
  putPostForm,
  resetForm,
  setInitialValues,
  deleteComment,
  setCommentFormInitialValues,
  upVotePost,
  downVotePost,
  upVoteComment,
  downVoteComment,
  getPostsThenComments
};
