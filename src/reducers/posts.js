import Ramda from "ramda";
import {
  POST_FORM_POST_SUCCESS,
  POST_FORM_PUT_SUCCESS,
  POSTS_FETCH_SUCCESS,
  POSTS_CHANGE_SORT_BY,
  POST_DELETE_SUCCESS
} from "../actions/types";

const ASCEND = "ascend";
const DESCEND = "descend";

const initialState = { data: {}, sortBy: "voteScore", sortOrder: DESCEND };

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_FORM_POST_SUCCESS:
    case POST_FORM_PUT_SUCCESS:
    case POSTS_FETCH_SUCCESS:
      return { ...state, data: { ...state.data, ...action.payload } };
    case POSTS_CHANGE_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
        sortOrder: calculateSortOrder({
          previousSortBy: state.sortBy,
          newSortBy: action.payload,
          sortOrder: state.sortOrder
        })
      };
    case POST_DELETE_SUCCESS:
      const newPost = Ramda.dissoc(action.payload, state.data);

      return { ...state, data: newPost };
    default:
      return state;
  }
};

// selectors
export const getPosts = ({ data }) => Ramda.values(data);

export const getPostsUndeleted = ({ data }) => {
  const postsArray = Ramda.values(data);

  const isNotDeleted = ({ deleted }) => !deleted;

  return Ramda.filter(isNotDeleted, postsArray);
};

export const getPostsCurrent = ({ data, sortBy, sortOrder }, category) => {
  const notDeletedPosts = getPostsUndeleted({ data });

  const sortFunction = calculateSortFunction({ sortBy, sortOrder });

  const sorted = Ramda.sort(sortFunction, notDeletedPosts);

  return category
    ? Ramda.filter(post => post.category === category, sorted)
    : sorted;
};

export const getPost = ({ data }, id) => data[id];

export const getPostsSortOrder = ({ sortOrder }) => sortOrder;

export const getPostsSortBy = ({ sortBy }) => sortBy;

// private helpers
const calculateSortFunction = ({ sortBy, sortOrder }) => {
  const defaultSortOrder = Ramda.descend(Ramda.prop("voteScore"));

  return sortBy ? Ramda[sortOrder](Ramda.prop(sortBy)) : defaultSortOrder;
};

const calculateSortOrder = ({ previousSortBy, newSortBy, sortOrder }) => {
  if (previousSortBy === newSortBy) {
    // intent is to flip sort order
    return sortOrder === ASCEND ? DESCEND : ASCEND;
  } else {
    return ASCEND;
  }
};
