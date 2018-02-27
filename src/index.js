import React from "react";
import { render } from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import createHistory from "history/createBrowserHistory";
import { ConnectedRouter, routerMiddleware } from "react-router-redux";
import { Route } from "react-router-dom";

import reducer from "./reducers/RootReducer";
import App from "./components/app/App";
import registerServiceWorker from "./registerServiceWorker";

const history = createHistory();
const middleware = routerMiddleware(history);
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(
  reducer,
  devTools,
  applyMiddleware(thunk, middleware)
);

const index = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={App} />
    </ConnectedRouter>
  </Provider>
);

render(index, document.getElementById("root"));
registerServiceWorker();
