import { fetchCategories } from "./categories";
import { fetchPosts, changePostsSortBy, deletePost } from "./posts";
import { fetchComments } from "./comments";
import {
  commentFormMounted,
  postCommentForm,
  putCommentForm,
  commentFormChanged
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
  commentFormMounted,
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
  setInitialValues
};
