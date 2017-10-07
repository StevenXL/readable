import PostViewPresenter from "./PostViewPresenter";
import { connect } from "react-redux";
import { getPost } from "./reducers";

const mapStateToProps = (state, ownProps) => {
  const post = getPost(state, ownProps.postId);

  return { post };
};

export default connect(mapStateToProps)(PostViewPresenter);
