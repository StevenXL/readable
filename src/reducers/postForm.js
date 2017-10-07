import {
  POST_FORM_CHANGE,
  POST_FORM_SUBMITTED_SUCCESS
} from "../actions/types";

const initialState = {
  title: "",
  body: "",
  author: "",
  category: ""
};

const postForm = (state = initialState, action) => {
  switch (action.type) {
    case POST_FORM_CHANGE:
      return { ...state, [action.payload.field]: action.payload.value };
    case POST_FORM_SUBMITTED_SUCCESS:
      return initialState;
    default:
      return state;
  }
};

export default postForm;

// selectors
export const getPostForm = state => state;
