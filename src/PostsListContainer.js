import { connect } from "react-redux";

import {
  getPostsThenComments,
  changePostsSortBy,
  upVotePost as upVote,
  downVotePost as downVote,
  deletePost
} from "./actions/";
import {
  getCurrentPostsWithComments,
  getPostsSortOrder,
  getPostsSortBy
} from "./reducers/";

import PostsListPresenter from "./PostsListPresenter";
import withDataFetch from "./withDataFetch";

const fetchPostListContainer = withDataFetch(PostsListPresenter, "posts");

const mapStateToProps = (state, ownProps) => {
  const category = ownProps.category;
  return {
    data: getCurrentPostsWithComments({ state, category }),
    sortOrder: getPostsSortOrder(state),
    sortBy: getPostsSortBy(state)
  };
};

const mapDispatchToProps = {
  fetchData: getPostsThenComments,
  changePostsSortBy,
  upVote,
  downVote,
  deletePost
};

export default connect(mapStateToProps, mapDispatchToProps)(
  fetchPostListContainer
);
