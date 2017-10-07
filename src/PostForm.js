import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPostForm, getCategories } from "./reducers";
import { postFormChange, submitPostForm } from "./actions";

import { Button, FormGroup, ControlLabel, FormControl } from "react-bootstrap";

const DEFAULT_SELECT = [{ name: "select" }];

class PostForm extends React.Component {
  handleSubmit = event => {
    event.preventDefault();

    const { postForm } = this.props;

    this.props.submitPostForm(postForm);
  };

  handleChange = field => event =>
    this.props.postFormChange(field, event.target.value);

  validateForm = () => {
    const { postForm } = this.props;

    return (
      postForm.title && postForm.body && postForm.author && postForm.category
    );
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
          />
        </FormGroup>

        <FormGroup controlId="category">
          <ControlLabel>Category</ControlLabel>
          <FormControl
            value={postForm.category}
            componentClass="select"
            onChange={this.handleChange("category")}
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
PostForm.propTypes = {
  postForm: PropTypes.shape({ title: PropTypes.string.isRequired }).isRequired,
  postFormChange: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  postForm: getPostForm(state),
  categories: getCategories(state)
});

const mapDispatchToProps = { postFormChange, submitPostForm };

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
