import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {Route, Router, IndexRoute, hashHistory} from "react-router";
import TodoApp from "TodoApp";
import * as actions from "actions";
import * as configureStore from "configureStore";
import TodoAPI from "TodoAPI"

const store = configureStore.configure();

store.subscribe(() => {
  let state = store.getState();
  console.log('New State', store.getState());
  TodoAPI.setTodos(state.todos);
});

let initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

//Load foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById("app"));
