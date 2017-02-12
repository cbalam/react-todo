import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {Route, Router, IndexRoute, hashHistory} from "react-router";
import TodoApp from "TodoApp";
import * as actions from "actions";
import * as configureStore from "configureStore";

const store = configureStore.configure();

store.subscribe(() => {
  console.log('New State', store.getState());
});

//Load foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById("app"));
