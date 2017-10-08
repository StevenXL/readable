import {
  COMMENT_FORM_POST_SUCCESS,
  COMMENT_FORM_MOUNTED,
  COMMENT_FORM_CHANGED
} from "../actions/types";

const initialState = { body: "", author: "" };

export default (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_FORM_CHANGED:
    case COMMENT_FORM_MOUNTED:
      return { ...state, ...action.payload };
    case COMMENT_FORM_POST_SUCCESS:
      return initialState;
    default:
      return state;
  }
};

// selectors
export const getCommentForm = state => state;
