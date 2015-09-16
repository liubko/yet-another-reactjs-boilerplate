import React from "react/addons";
let { PureRenderMixin } = React.addons;
import _ from "lodash";
import cs from "classname";

import "./Header.less";

let Header = React.createClass({
  contextTypes: {
    router: React.PropTypes.func.isRequired
  },

  mixins: [ PureRenderMixin ],

  _getRouteName() {
    let { name } = _.findLast(this.context.router.getCurrentRoutes(), r => r.name) || {};
    return name;
  },

  render() {
    let currentRouteName = this._getRouteName();
    return (
      <div className="Header header clearfix">
        <nav>
          <ul className="nav nav-pills pull-right">
            <li role="presentation"
                onClick={() => this.context.router.transitionTo("HomePage")}
                className={cs({active: currentRouteName === "HomePage"})}>
              <a>Home</a>
            </li>
            <li role="presentation"
                onClick={() => this.context.router.transitionTo("SearchPage")}
                className={cs({active: currentRouteName === "SearchPage"})}>
              <a>Search</a>
            </li>
          </ul>
        </nav>

        <h3 className="text-muted">Yet anouther ReactJS boilerplate</h3>
      </div>
    );
  }
});

export default Header;
