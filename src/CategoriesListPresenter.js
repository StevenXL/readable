import React from "react";
import PropTypes from "prop-types";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

// this should return a table with each row representing a category
const CategoriesListPresenter = ({ categories }) => {
  const toListGroupItem = ({ name }) =>
    <ListGroupItem key={name}>
      <Link to={`/${name}`}>
        {name}
      </Link>
    </ListGroupItem>;

  return (
    <ListGroup>
      {categories.map(toListGroupItem)}
    </ListGroup>
  );
};

CategoriesListPresenter.propTypes = { categories: PropTypes.array.isRequired };

export default CategoriesListPresenter;
