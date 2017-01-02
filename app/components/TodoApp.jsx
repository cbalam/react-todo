import React from "react";
import TodoList from "TodoList"
import AddTodo from "AddTodo";

export default class TodoApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Clean the yard'
        }, {
          id:3,
          text: 'Leave mail on porch'
        }, {
          id: 4,
          text: 'Play video games'
        }
      ]
    }
  }

  handleAddTodo(text) {
    alert('new todo ' + text);
  }

  render() {
    let {todos} = this.state;

    return (
      <div className="row">
        <div className="column small-centered medium-6 large-4">
          <h1 className="page-title">Todo App</h1>
          <TodoList todos={todos}/>
          <AddTodo onAddTodo={this.handleAddTodo}/>
        </div>
      </div>
    );
  }
}