import { connect } from "react-redux";

import { fetchPosts, changePostsSortBy } from "./actions/";
import {
  getPostsCurrent,
  getPostsSortOrder,
  getPostsSortBy
} from "./reducers/";

import PostsListPresenter from "./PostsListPresenter";
import withDataFetch from "./withDataFetch";

const PostsListContainer = withDataFetch(PostsListPresenter, "posts");

const mapStateToProps = state => ({
  data: getPostsCurrent(state),
  sortOrder: getPostsSortOrder(state),
  sortBy: getPostsSortBy(state)
});
const mapDispatchToProps = { fetchData: fetchPosts, changePostsSortBy };

export default connect(mapStateToProps, mapDispatchToProps)(PostsListContainer);
