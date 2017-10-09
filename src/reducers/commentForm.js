import {
  COMMENT_FORM_POST_SUCCESS,
  COMMENT_FORM_CHANGED,
  COMMENT_FORM_SET_INITIAL_VALUES,
  COMMENT_FORM_PUT_SUCCESS
} from "../actions/types";

const initialState = { body: "", author: "" };

export default (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_FORM_PUT_SUCCESS:
    case COMMENT_FORM_SET_INITIAL_VALUES:
    case COMMENT_FORM_CHANGED:
      return { ...state, ...action.payload };
    case COMMENT_FORM_POST_SUCCESS:
      return initialState;
    default:
      return state;
  }
};

// selectors
export const getCommentForm = state => state;
