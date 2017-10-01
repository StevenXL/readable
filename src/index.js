import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";

const ConnectedApp = () =>
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>;

ReactDOM.render(<ConnectedApp />, document.getElementById("root"));
registerServiceWorker();
