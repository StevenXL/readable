import React from "react";
import { Row, Col } from "react-bootstrap";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

import CategoriesListContainer from "./CategoriesListContainer";
import PostsListContainer from "./PostsListContainer";
import NewPost from "./NewPost";

const CategoryView = ({ category }) => {
  return (
    <span>
      <Row>
        <Col xs={12}>
          <h3>
            {category}
          </h3>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <CategoriesListContainer />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <NewPost />
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
