import React from "react/addons";
let { PureRenderMixin } = React.addons;
import Fluxxor from "fluxxor";

import Header from "components/Header";
import Search from "components/Search";
import RepoListItem from "components/RepoListItem";

let SearchPage = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },

  mixins: [
    PureRenderMixin,
    Fluxxor.FluxMixin(React),
    Fluxxor.StoreWatchMixin("repos")
  ],

  getStateFromFlux() {
    return {
      repos: this.getFlux().store("repos").getRepos(),
    };
  },

  componentDidMount() {
    this.getFlux().actions.repos.fetch("React");
  },

  _handleSearch(query) {
    this.getFlux().actions.repos.fetch(query);
  },

  render() {
    return (
      <div className="SearchPage">
        <Header />

        <Search onSearch={this._handleSearch} />

        <div className="list-group">
          {this.state.repos.map(r => {
            return <RepoListItem key={r.id} data={r} />;
          }) }
        </div>
      </div>
    );
  }
});

export default SearchPage;
