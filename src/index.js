import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import store from "./store";

const ConnectedApp = () =>
  <Provider store={store}>
    <App />
  </Provider>;

ReactDOM.render(<ConnectedApp />, document.getElementById("root"));
registerServiceWorker();
