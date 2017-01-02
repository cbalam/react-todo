import React from "react";
import expect from "expect";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";
import TodoApp from "TodoApp";

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });
});
