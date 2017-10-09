import { combineReducers } from "redux";
import categories, * as fromCategories from "./categories";
import posts, * as fromPosts from "./posts";
import postForm, * as fromPostForm from "./postForm";
import comments, * as fromComments from "./comments";
import commentForm, * as fromCommentForm from "./commentForm";

export default combineReducers({
  categories,
  posts,
  postForm,
  comments,
  commentForm
});

// selectors
export const getCategories = state =>
  fromCategories.getCategories(state.categories);

export const getPosts = state => fromPosts.getPosts(state.posts);

export const getPostsCurrent = ({ state, category }) =>
  fromPosts.getPostsCurrent(state.posts, category);

export const getPostsSortOrder = state =>
  fromPosts.getPostsSortOrder(state.posts);

export const getPostsSortBy = state => fromPosts.getPostsSortBy(state.posts);

export const getPostForm = state => fromPostForm.getPostForm(state.postForm);

export const getPost = (state, id) => fromPosts.getPost(state.posts, id);

export const getActiveCommentsForPost = (state, id) =>
  fromComments.getActiveCommentsForPost(state.comments, id);

export const getCommentForm = state =>
  fromCommentForm.getCommentForm(state.commentForm);

export const getComment = (state, commentId) =>
  fromComments.getComment(state.comments, commentId);
