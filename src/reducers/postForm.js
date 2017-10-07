import {
  POST_FORM_CHANGE,
  POST_FORM_POST_SUCCESS,
  POST_FORM_SET_INITIAL_VALUES,
  RESET_FORM
} from "../actions/types";

const initialState = {
  title: "",
  body: "",
  author: "",
  category: ""
};

const postForm = (state = initialState, action) => {
  switch (action.type) {
    case POST_FORM_SET_INITIAL_VALUES:
      return action.payload;
    case POST_FORM_CHANGE:
      return { ...state, [action.payload.field]: action.payload.value };
    case RESET_FORM:
    case POST_FORM_POST_SUCCESS:
      return initialState;
    default:
      return state;
  }
};

export default postForm;

// selectors
export const getPostForm = state => state;
