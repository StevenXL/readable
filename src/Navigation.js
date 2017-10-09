import React from "react";
import PropTypes from "prop-types";
import { Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { getCategories } from "./reducers";
import { fetchCategories } from "./actions";

class Navigation extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Readable</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <ul className="nav navbar-nav">
          {this.props.categories.map(
            ({ name: categoryName, path: categoryPath }) =>
              <li role="presentation" key={`${categoryName}`}>
                <NavLink to={`/${categoryPath}`}>
                  {categoryName}
                </NavLink>
              </li>
          )}
        </ul>
      </Navbar>
    );
  }
}

Navigation.defaultProps = { categories: [] };

Navigation.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, path: PropTypes.string })
  ),
  fetchCategories: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ categories: getCategories(state) });

const mapDispatchToProps = { fetchCategories };

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
