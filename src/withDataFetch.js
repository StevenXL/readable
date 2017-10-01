import React from "react";
import PropTypes from "prop-types";
import Ramda from "ramda";
import { getDisplayName } from "./utilities";

export default (WrappedComponent, propName) => {
  return class extends React.Component {
    static defaultProps = { data: [] };

    static propTypes = {
      fetchData: PropTypes.func.isRequired,
      data: PropTypes.array
    };

    static displayName = `WithDataFetch(${getDisplayName(WrappedComponent)})`;

    componentDidMount() {
      this.props.fetchData();
    }

    render() {
      const data = { [propName]: this.props.data };
      const passThroughProps = Ramda.omit(["fetchData", "data"], this.props);
      const finalPassThroughProps = Ramda.merge(passThroughProps, data);

      return (
        <div>
          <WrappedComponent {...finalPassThroughProps} />
        </div>
      );
    }
  };
};
