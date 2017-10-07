import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

import CategoriesListContainer from "./CategoriesListContainer";
import PostsListContainer from "./PostsListContainer";
import NewPost from "./NewPost";

const CategoryView = ({ category }) => {
  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <h1>Category</h1>
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
          <Route path="/:category?" component={PostsListContainer} />
        </Col>
      </Row>
    </Grid>
  );
};

CategoryView.propTypes = { category: PropTypes.string.isRequired };

export default CategoryView;
