import React from "react";
import { Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

import PostsListContainer from "./PostsListContainer";
import PostForm from "./PostForm";

const CategoryView = ({ category }) => {
  return (
    <span>
      <Row>
        <Col xs={12}>
          <h3>
            Viwing category: {category}
          </h3>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <h3>Create a New Post</h3>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <PostForm />
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <h3>
            Listing Posts for {category}
          </h3>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <PostsListContainer category={category} />
        </Col>
      </Row>
    </span>
  );
};

CategoryView.propTypes = { category: PropTypes.string.isRequired };

export default CategoryView;
