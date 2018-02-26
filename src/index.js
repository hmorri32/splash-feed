import React from "react";
import { render } from "react-dom";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/RootReducer";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducer, devTools, applyMiddleware(thunk));

const index = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(index, document.getElementById("root"));
registerServiceWorker();
