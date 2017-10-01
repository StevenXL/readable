import { connect } from "react-redux";

import { fetchCategories } from "./actions/";
import { getCategories } from "./reducers/";
import withDataFetch from "./withDataFetch";

import CategoriesListPresenter from "./CategoriesListPresenter";

const CategoriesListContainer = withDataFetch(
  CategoriesListPresenter,
  "categories"
);

// SETTINGS
const mapStateToProps = state => ({
  data: getCategories(state)
});

const mapDispatchToProps = { fetchData: fetchCategories };

export default connect(mapStateToProps, mapDispatchToProps)(
  CategoriesListContainer
);
