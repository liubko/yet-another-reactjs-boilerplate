import "babel/polyfill"; // babel polyfill from Promisses and stuff
import "normalize.css";
import React from "react/addons";
import Router from "react-router";
import routes from "./Router";

import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";
const loggerMiddleware = createLogger();

import { Provider } from "react-redux";
import * as redux from "redux";
import rootReducer from "./reducers";

const createStoreWithMiddleware = redux.applyMiddleware(
  thunkMiddleware, // lets us dispatch() functions
  loggerMiddleware // neat middleware that logs actions
)(redux.createStore);

const store = createStoreWithMiddleware(rootReducer);

/*==========  Mount application  ==========*/
document.addEventListener("DOMContentLoaded", () => {
  Router.run(routes, Handler => {
    React.render(
      <Provider store={store}>
        {() => <Handler store={store} />}
      </Provider>,
      document.body
    );
  });
});

/* To enable Chrome react plugin */
window.React = React;
