import React from "react";
import expect from "expect";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import TestUtils from "react-addons-test-utils";
import * as configureStore from "configureStore";
import TodoApp from "TodoApp";
import TodoList from "TodoList";


describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should render TodoList', () => {
    let store = configureStore.configure();
    let provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp/>
      </Provider>
    );

    let todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
    let todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

    expect(todoList.length).toBe(1);
  });
});
