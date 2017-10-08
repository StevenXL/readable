import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { sortCommentsByVoteScoreDesc } from "./utilities";
import { getPost, getActiveCommentsForPost } from "./reducers";
import { fetchComments, deletePost } from "./actions";
import PostViewPresenter from "./PostViewPresenter";

class PostViewContainer extends React.Component {
  state = { redirect: false };

  delete = () => {
    const { deletePost, postId } = this.props;
    deletePost(postId).then(() => this.setState({ redirect: true }));
  };

  componentDidMount() {
    const { postId } = this.props;
    this.props.fetchComments(postId);
  }

  render() {
    const { comments, post } = this.props;
    const redirect = this.state.redirect;

    return (
      <span>
        {post &&
          <PostViewPresenter
            comments={comments}
            post={post}
            deletePost={this.delete}
          />}

        {(redirect || !post) && <Redirect to="/" />}
      </span>
    );
  }
}

PostViewContainer.defaultProps = { post: null };

PostViewContainer.propTypes = {
  deletePost: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
  fetchComments: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired,
  post: PropTypes.shape({ title: PropTypes.string })
};

const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.postId;

  const post = getPost(state, postId);
  const comments = getActiveCommentsForPost(state, postId);
  const sortedComments = sortCommentsByVoteScoreDesc(comments);

  return { postId, comments: sortedComments, post };
};

const mapDispatchToProps = { fetchComments, deletePost };

export default connect(mapStateToProps, mapDispatchToProps)(PostViewContainer);
