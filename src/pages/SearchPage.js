import React from "react/addons";
let { PureRenderMixin } = React.addons;

import { connect } from "react-redux";
import * as reposActions from "actions/Repos";
import Header from "components/Header";
import Search from "components/Search";
import RepoListItem from "components/RepoListItem";

let SearchPage = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },

  mixins: [
    PureRenderMixin,
  ],

  componentDidMount() {
    this.props.dispatch(reposActions.fetchRepos("React"));
  },

  _handleSearch(query) {
    this.props.dispatch(reposActions.fetchRepos(query));
  },

  render() {
    let { repos } = this.props || [];
    return (
      <div className="SearchPage">
        <Header />

        <Search onSearch={this._handleSearch} />

        <div className="list-group">
          {repos.map(r => {
            return <RepoListItem key={r.id} data={r} />;
          }) }
        </div>
      </div>
    );
  }
});

function select(state) {
  return {
    repos: state.repos
  };
}

export default connect(select)(SearchPage);
