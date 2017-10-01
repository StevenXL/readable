import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getNewPost, getCategories } from "./reducers";
import { newPostChange, submitNewPost } from "./actions";

import { Button, FormGroup, ControlLabel, FormControl } from "react-bootstrap";

const DEFAULT_SELECT = [{ name: "select" }];

class NewPost extends React.Component {
  handleSubmit = event => {
    event.preventDefault();

    const { newPost } = this.props;

    this.props.submitNewPost(newPost);
  };

  handleChange = field => event =>
    this.props.newPostChange(field, event.target.value);

  validateForm = () => {
    const { newPost } = this.props;

    return newPost.title && newPost.body && newPost.author && newPost.category;
  };

  render() {
    const valid = this.validateForm();

    const { newPost, categories } = this.props;
    const selectOptions = newPost.category
      ? categories
      : DEFAULT_SELECT.concat(categories);

    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="title">
          <ControlLabel>Title of Post </ControlLabel>
          <FormControl
            type="text"
            value={newPost.title}
            placeholder="Title"
            name="title"
            onChange={this.handleChange("title")}
          />
        </FormGroup>

        <FormGroup controlId="body">
          <ControlLabel>Body of Post </ControlLabel>
          <FormControl
            type="text"
            value={newPost.body}
            placeholder="Body"
            name="body"
            onChange={this.handleChange("body")}
          />
        </FormGroup>

        <FormGroup controlId="author">
          <ControlLabel>Author of Post </ControlLabel>
          <FormControl
            type="text"
            value={newPost.author}
            placeholder="Author"
            name="author"
            onChange={this.handleChange("author")}
          />
        </FormGroup>

        <FormGroup controlId="category">
          <ControlLabel>Category</ControlLabel>
          <FormControl
            value={newPost.category}
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
NewPost.propTypes = {
  newPost: PropTypes.shape({ title: PropTypes.string.isRequired }).isRequired,
  newPostChange: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  newPost: getNewPost(state),
  categories: getCategories(state)
});

const mapDispatchToProps = { newPostChange, submitNewPost };

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
