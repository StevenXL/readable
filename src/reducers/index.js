import { combineReducers } from "redux";
import categories, * as fromCategories from "./categories";
import posts, * as fromPosts from "./posts";
import postForm, * as fromPostForm from "./postForm";

export default combineReducers({ categories, posts, postForm });

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
