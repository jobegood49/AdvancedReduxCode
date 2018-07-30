import React from "react";
import ReactDom from "react-dom";
// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import reducers from "./reducers/index";
import Root from "./Root"

import App from "./components/App";

ReactDom.render(
  <Root>
    <App />
  </Root>,

  document.querySelector("#root")
);
