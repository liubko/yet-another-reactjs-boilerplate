import React from "react/addons";
import { RouteHandler } from "react-router";

let Application = React.createClass({
  render() {
    return (
      <div className="Application container">
        <RouteHandler key={name} {...this.props} />
      </div>
    );
  },
});

export default Application;
