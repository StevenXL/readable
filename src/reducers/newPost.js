import { NEW_POST_CHANGE, NEW_POST_SUBMITTED_SUCCESS } from "../actions/types";

const initialState = {
  title: "",
  body: "",
  author: "",
  category: ""
};

const newPost = (state = initialState, action) => {
  switch (action.type) {
    case NEW_POST_CHANGE:
      return { ...state, [action.payload.field]: action.payload.value };
    case NEW_POST_SUBMITTED_SUCCESS:
      return initialState;
    default:
      return state;
  }
};

export default newPost;

// selectors
export const getNewPost = state => state;
