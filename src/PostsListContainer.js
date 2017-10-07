import Ramda from "ramda";
import { connect } from "react-redux";

import { fetchPosts, changePostsSortBy } from "./actions/";
import {
  getPostsCurrent,
  getPostsSortOrder,
  getPostsSortBy
} from "./reducers/";

import PostsListPresenter from "./PostsListPresenter";
import withDataFetch from "./withDataFetch";

const fetchPostListContainer = withDataFetch(PostsListPresenter, "posts");

const mapStateToProps = (state, ownProps) => {
  const category = ownProps.category;
  return {
    data: getPostsCurrent({ state, category }),
    sortOrder: getPostsSortOrder(state),
    sortBy: getPostsSortBy(state)
  };
};

const mapDispatchToProps = { fetchData: fetchPosts, changePostsSortBy };

export default connect(mapStateToProps, mapDispatchToProps)(
  fetchPostListContainer
);
