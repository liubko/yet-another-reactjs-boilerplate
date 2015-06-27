import React from "react/addons";
let { PureRenderMixin } = React.addons;

import Header from "components/Header";

let HomePage = React.createClass({
  mixins: [ PureRenderMixin ],

  render() {
    return (
      <div className="HomePage">
        <Header />

        <h3>Powered By:</h3>

        <ul className="list-group">
          <li className="list-group-item"><a href="https://github.com/facebook/react">ReactJS</a></li>
          <li className="list-group-item"><a href="https://github.com/rackt/react-router">React Router</a></li>
          <li className="list-group-item"><a href="https://github.com/BinaryMuse/fluxxor">Fluxxor</a></li>
          <li className="list-group-item"><a href="https://github.com/less/less.js">LESS</a></li>
          <li className="list-group-item"><a href="https://github.com/webpack/webpack">Webpack</a></li>
          <li className="list-group-item"><a href="https://github.com/babel/babel">Babel</a></li>
          <li className="list-group-item"><a href="https://github.com/eslint/eslint">ESLint</a></li>
        </ul>
      </div>
    );
  }
});

export default HomePage;
