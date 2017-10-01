import Ramda from "ramda";

import { CATEGORIES_FETCH_SUCCESS } from "./types";
import { respToJSON, defaultOptions } from "./helpers";

const fetchCategoriesSuccess = categories => ({
  type: CATEGORIES_FETCH_SUCCESS,
  payload: categories
});

export const fetchCategories = () => dispatch => {
  return fetch("/categories", defaultOptions)
    .then(respToJSON)
    .then(({ categories }) => {
      const keyed = Ramda.indexBy(Ramda.prop("name"), categories);

      dispatch(fetchCategoriesSuccess(keyed));
    });
};
