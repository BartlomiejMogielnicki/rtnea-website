import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root/Root.js";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
