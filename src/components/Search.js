import React from "react/addons";
let { PureRenderMixin } = React.addons;

import "./Search.less";

let Header = React.createClass({
  propTypes: {
    onSearch: React.PropTypes.func.isRequired,
  },

  mixins: [ PureRenderMixin ],

  _handleSearch() {
    this.props.onSearch(React.findDOMNode(this.refs.search).value);
  },

  render() {
    return (
      <div className="Search row">
        <div className="col-lg-12">
          <div className="input-group">
            <input ref="search"
                   type="text"
                   className="form-control"
                   placeholder="Search for..."
                   defaultValue="React" />

            <span className="input-group-btn">
              <button className="btn btn-default"
                      type="button"
                      onClick={this._handleSearch}>
                Go!
              </button>
            </span>
          </div>
        </div>
      </div>
    );
  }
});

export default Header;
