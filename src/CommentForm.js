import React from "react";
import Ramda from "ramda";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, FormGroup, ControlLabel, FormControl } from "react-bootstrap";

import { isPresent } from "./utilities";
import { getCommentForm } from "./reducers";
import { postCommentForm, putCommentForm, commentFormChanged } from "./actions";

class CommentForm extends React.Component {
  handleChange = field => event =>
    this.props.commentFormChanged({ [field]: event.target.value });

  handleSubmit = event => {
    event.preventDefault();

    const { commentForm, postCommentForm, putCommentForm, postId } = this.props;
    const withParentId = Ramda.merge({ parentId: postId }, commentForm);

    if (commentForm.id) {
      putCommentForm(withParentId);
    } else {
      postCommentForm(withParentId);
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
  commentFormChanged
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
