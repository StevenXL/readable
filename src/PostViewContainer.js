import React from "react";
import { connect } from "react-redux";

import { getPost, getCommentsForPost } from "./reducers";
import { fetchComments } from "./actions";
import PostViewPresenter from "./PostViewPresenter";

class PostViewContainer extends React.Component {
  componentDidMount() {
    const { postId } = this.props;
    this.props.fetchComments(postId);
  }

  render() {
    const { comments, post } = this.props;

    return <PostViewPresenter comments={comments} post={post} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.postId;

  const post = getPost(state, postId);
  const comments = getCommentsForPost(state, postId);

  return { postId, comments, post };
};

const mapDispatchToProps = { fetchComments };

export default connect(mapStateToProps, mapDispatchToProps)(PostViewContainer);
