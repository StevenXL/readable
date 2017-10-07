import React from "react";
import Ramda from "ramda";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPostForm, getCategories } from "./reducers";
import {
  postFormChange,
  postPostForm,
  putPostForm,
  setInitialValues,
  resetForm
} from "./actions";

import { Button, FormGroup, ControlLabel, FormControl } from "react-bootstrap";

const DEFAULT_SELECT = [{ name: "select" }];

class PostForm extends React.Component {
  handleSubmit = event => {
    event.preventDefault();

    const { postForm, postPostForm, putPostForm } = this.props;

    if (postForm.id) {
      putPostForm(postForm);
    } else {
      postPostForm(postForm);
    }
  };

  handleChange = field => event =>
    this.props.postFormChange(field, event.target.value);

  validateForm = () => {
    const { postForm } = this.props;

    return (
      postForm.title && postForm.body && postForm.author && postForm.category
    );
  };

  componentDidMount = () => {
    if (this.props.initialValues) {
      this.props.setInitialValues(this.props.initialValues);
    }
  };

  componentWillUnmount = () => {
    this.props.resetForm();
  };

  render() {
    const valid = this.validateForm();

    const { postForm, categories } = this.props;
    const selectOptions = postForm.category
      ? categories
      : DEFAULT_SELECT.concat(categories);

    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="title">
          <ControlLabel>Title of Post </ControlLabel>
          <FormControl
            type="text"
            value={postForm.title}
            placeholder="Title"
            name="title"
            onChange={this.handleChange("title")}
          />
        </FormGroup>

        <FormGroup controlId="body">
          <ControlLabel>Body of Post </ControlLabel>
          <FormControl
            type="text"
            value={postForm.body}
            placeholder="Body"
            name="body"
            onChange={this.handleChange("body")}
          />
        </FormGroup>

        <FormGroup controlId="author">
          <ControlLabel>Author of Post </ControlLabel>
          <FormControl
            type="text"
            value={postForm.author}
            placeholder="Author"
            name="author"
            onChange={this.handleChange("author")}
            disabled={Ramda.contains("author", this.props.disabledFields)}
          />
        </FormGroup>

        <FormGroup controlId="category">
          <ControlLabel>Category</ControlLabel>
          <FormControl
            value={postForm.category}
            componentClass="select"
            onChange={this.handleChange("category")}
            disabled={Ramda.contains("category", this.props.disabledFields)}
          >
            {selectOptions.map(({ name }) =>
              <option key={name} value={name}>
                {name}
              </option>
            )}
          </FormControl>
        </FormGroup>

        {valid && <Button type="submit">Submit</Button>}
      </form>
    );
  }
}

// SETTINGS
PostForm.defaultProps = { initialValues: null, disabledFields: [] };

PostForm.propTypes = {
  categories: PropTypes.array.isRequired,
  disabledFields: PropTypes.arrayOf(PropTypes.string),
  initialValues: PropTypes.shape({ title: PropTypes.string.isRequired }),
  postForm: PropTypes.shape({ title: PropTypes.string.isRequired }).isRequired,
  postFormChange: PropTypes.func.isRequired,
  setInitialValues: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  postForm: getPostForm(state),
  categories: getCategories(state)
});

const mapDispatchToProps = {
  postFormChange,
  postPostForm,
  putPostForm,
  setInitialValues,
  resetForm
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
