import { combineReducers } from "redux";
import categories, * as fromCategories from "./categories";
import posts, * as fromPosts from "./posts";
import newPost, * as fromNewPost from "./newPost";

export default combineReducers({ categories, posts, newPost });

// selectors
export const getCategories = state =>
  fromCategories.getCategories(state.categories);

export const getPosts = state => fromPosts.getPosts(state.posts);

export const getPostsCurrent = state => fromPosts.getPostsCurrent(state.posts);

export const getPostsSortOrder = state =>
  fromPosts.getPostsSortOrder(state.posts);

export const getPostsSortBy = state => fromPosts.getPostsSortBy(state.posts);

export const getNewPost = state => fromNewPost.getNewPost(state.newPost);
