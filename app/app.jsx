import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {Route, Router, IndexRoute, hashHistory} from "react-router";
import TodoApp from "TodoApp";
import Login from "Login";
import * as actions from "actions";
import * as configureStore from "configureStore";
import firebase, {firebaseRef} from "app/firebase/";

const store = configureStore.configure();
store.dispatch(actions.startAddTodos());

//Load foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/">
        <IndexRoute component={Login}/>
        <Route path="todos" component={TodoApp} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("app"));
