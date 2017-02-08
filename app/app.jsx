import React from "react";
import ReactDOM from "react-dom";
import {Route, Router, IndexRoute, hashHistory} from "react-router";
import TodoApp from "TodoApp";
import * as actions from "actions";
import * as configureStore from "configureStore";

const store = configureStore.configure();

store.subscribe(() => {
  console.log('New State', store.getState());
});

store.dispatch(actions.addTodo('Clean my room'));
store.dispatch(actions.setSearchText('room'));
store.dispatch(actions.toggleShowCompleted());

//Load foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <TodoApp/>, document.getElementById("app"));
