import "babel/polyfill"; // babel polyfill from Promisses and stuff
import "whatwg-fetch"; // fetch polyfill
import "normalize.css";

import React from "react/addons";

import Fluxxor from "fluxxor";
import stores from "stores/";
import actions from "actions/";
let flux = new Fluxxor.Flux(stores, actions);

import Router from "react-router";
import routes from "./Router";

/*=================================
=            For debug            =
=================================*/
window.React = React; /* To enable Chrome react plugin */
window.flux = flux;

flux.on("dispatch", (type, payload) => {
  if (console && console.log) {
    console.log("[Dispatch]", type, payload);
  }
});
/*-------------------------------*/


/*==========  Mount application  ==========*/
document.addEventListener("DOMContentLoaded", () => {
  Router.run(routes, Handler => {
    React.render(<Handler flux={flux} />, document.body);
  });
});
