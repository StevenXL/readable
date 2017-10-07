import Ramda from "ramda";
import {
  POST_FORM_SUBMITTED_SUCCESS,
  POSTS_FETCH_SUCCESS,
  POSTS_CHANGE_SORT_BY
} from "../actions/types";

const ASCEND = "ascend";
const DESCEND = "descend";

const initialState = { data: {}, sortBy: "voteScore", sortOrder: DESCEND };

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_FORM_SUBMITTED_SUCCESS:
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
