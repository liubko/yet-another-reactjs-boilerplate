import React from "react/addons"; // eslint-disable-line
import {Route, Redirect} from "react-router";

import App from "./App.js";

import HomePage from "pages/HomePage.js";
import SearchPage from "pages/SearchPage.js";

export default (
  <Route name="App" path="/" handler={App}>
    <Route name="HomePage" path="home" handler={HomePage} />

    <Route name="SearchPage" path="search" handler={SearchPage} />

    <Redirect from="/" to="HomePage" />
  </Route>
);
