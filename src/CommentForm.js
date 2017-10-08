import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, FormGroup, ControlLabel, FormControl } from "react-bootstrap";

import { isPresent } from "./utilities";
import { getCommentForm } from "./reducers";
import {
  postCommentForm,
  putCommentForm,
  commentFormMounted,
  commentFormChanged
} from "./actions";

class CommentForm extends React.Component {
  componentDidMount() {
    const { postId, commentFormMounted } = this.props;
    commentFormMounted(postId);
  }

  handleChange = field => event =>
    this.props.commentFormChanged({ [field]: event.target.value });

  handleSubmit = event => {
    event.preventDefault();

    const { commentForm, postCommentForm, putCommentForm } = this.props;

    if (commentForm.id) {
      putCommentForm(commentForm);
    } else {
      postCommentForm(commentForm);
    }
  };

  validate = () => {
    const { commentForm } = this.props;

    return isPresent(commentForm.body) && isPresent(commentForm.author);
  };

  render() {
    const valid = this.validate();
    const { commentForm } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="body">
          <ControlLabel>Body of Comment</ControlLabel>
          <FormControl
            type="text"
            value={commentForm.body}
            placeholder="Body"
            name="body"
            onChange={this.handleChange("body")}
          />
        </FormGroup>

        <FormGroup controlId="author">
          <ControlLabel>Author of Comment</ControlLabel>
          <FormControl
            type="text"
            value={commentForm.author}
            placeholder="Author"
            name="author"
            onChange={this.handleChange("author")}
          />
        </FormGroup>

        {valid && <Button type="submit">Submit</Button>}
      </form>
    );
  }
}

CommentForm.propTypes = {
  postId: PropTypes.string.isRequired,
  commentFormMounted: PropTypes.func.isRequired,
  commentFormChanged: PropTypes.func.isRequired,
  commentForm: PropTypes.shape({
    body: PropTypes.string,
    author: PropTypes.string
  }).isRequired,
  putCommentForm: PropTypes.func.isRequired,
  postCommentForm: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  const commentForm = getCommentForm(state);

  return { commentForm };
};

const mapDispatchToProps = {
  postCommentForm,
  putCommentForm,
  commentFormMounted,
  commentFormChanged
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
