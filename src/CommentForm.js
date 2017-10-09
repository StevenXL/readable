import React from "react";
import Ramda from "ramda";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Row,
  Col,
  Button,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { isPresent } from "./utilities";
import { getCommentForm } from "./reducers";
import {
  postCommentForm,
  putCommentForm,
  commentFormChanged,
  setCommentFormInitialValues,
  upVoteComment,
  deleteComment,
  downVoteComment
} from "./actions";

class CommentForm extends React.Component {
  get postId() {
    const fromInitialValues = Ramda.path(
      ["initialValues", "parentId"],
      this.props
    );

    return fromInitialValues || this.props.postId;
  }

  componentDidMount() {
    const { initialValues, setInitialValues } = this.props;

    if (initialValues) {
      setInitialValues(initialValues);
    }
  }

  handleChange = field => event =>
    this.props.commentFormChanged({ [field]: event.target.value });

  handleSubmit = event => {
    event.preventDefault();

    const { commentForm, postCommentForm, putCommentForm } = this.props;
    const withParentId = Ramda.merge({ parentId: this.postId }, commentForm);

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
    const {
      commentForm,
      disabledFields,
      deleteComment,
      downVoteComment,
      upVoteComment
    } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        {commentForm.voteScore &&
          <h4>
            Vote Score: <small>{commentForm.voteScore}</small>
          </h4>}

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
            disabled={Ramda.contains("author", disabledFields)}
          />
        </FormGroup>

        <Row>
          <Col xs={3} className="text-center">
            {valid && <Button type="submit">Submit</Button>}
          </Col>

          <Col xs={3} className="text-center">
            {commentForm.id &&
              <Button
                bsStyle="success"
                onClick={() => upVoteComment(commentForm.id)}
              >
                Up Vote
              </Button>}
          </Col>

          <Col xs={3} className="text-center">
            {commentForm.id &&
              <Button
                bsStyle="warning"
                onClick={() => downVoteComment(commentForm.id)}
              >
                Down Vote
              </Button>}
          </Col>

          <Col xs={3} className="text-center">
            {commentForm.id &&
              <Button
                bsStyle="danger"
                onClick={() => deleteComment(commentForm.id)}
              >
                Delete
              </Button>}
          </Col>
        </Row>
      </form>
    );
  }
}

CommentForm.defaultProps = {
  postId: null,
  initialValues: null,
  disabledFields: []
};

CommentForm.propTypes = {
  initialValues: PropTypes.shape({ id: PropTypes.string.isRequired }),
  postId: PropTypes.string,
  commentFormChanged: PropTypes.func.isRequired,
  commentForm: PropTypes.shape({
    body: PropTypes.string,
    author: PropTypes.string
  }).isRequired,
  putCommentForm: PropTypes.func.isRequired,
  postCommentForm: PropTypes.func.isRequired,
  setInitialValues: PropTypes.func.isRequired,
  disabledFields: PropTypes.arrayOf(PropTypes.string)
};

const mapStateToProps = state => {
  const commentForm = getCommentForm(state);

  return { commentForm };
};

const mapDispatchToProps = {
  postCommentForm,
  putCommentForm,
  commentFormChanged,
  setInitialValues: setCommentFormInitialValues,
  upVoteComment,
  downVoteComment,
  deleteComment
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
