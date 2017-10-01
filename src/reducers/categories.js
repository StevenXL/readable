import Ramda from "ramda";
import { CATEGORIES_FETCH_SUCCESS } from "../actions/types";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case CATEGORIES_FETCH_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

//selectors
export const getCategories = state => Ramda.values(state);
