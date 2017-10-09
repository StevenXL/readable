import { fetchCategories } from "./categories";
import { fetchPosts, changePostsSortBy, deletePost } from "./posts";
import { fetchComments, deleteComment } from "./comments";
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
  setCommentFormInitialValues
};
