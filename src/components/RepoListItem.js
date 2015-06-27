import React from "react/addons";
let { PureRenderMixin } = React.addons;

let RepoListItem = React.createClass({
  propTypes: {
    data: React.PropTypes.shape({
      full_name: React.PropTypes.string,
      forks: React.PropTypes.number,
      stargazers_count: React.PropTypes.number,
      html_url: React.PropTypes.string,
      language: React.PropTypes.string,
      description: React.PropTypes.string,
    }).isRequired,
  },

  mixins: [ PureRenderMixin ],

  render() {
    let { data } = this.props;
    return (
      <a className="RepoListItem list-group-item"
         href={data.html_url}
         target="_blank">
        <h4 className="list-group-item-heading">{data.full_name}</h4>

        <p className="list-group-item-text">{data.language} Forks: {data.forks} Stars: {data.stargazers_count}</p>

        <p className="list-group-item-text">{data.description}</p>
      </a>
    );
  }
});

export default RepoListItem;
