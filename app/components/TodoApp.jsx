import React from "react";
import TodoList from "TodoList";
import AddTodo from "AddTodo";
import TodoSearch from "TodoSearch";
import uuid from "node-uuid";

export default class TodoApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog'
        }, {
          id: uuid(),
          text: 'Clean the yard'
        }, {
          id: uuid(),
          text: 'Leave mail on porch'
        }, {
          id: uuid(),
          text: 'Play video games'
        }
      ]
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text
        }
      ]
    });
  }

  handleSearch(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  }

  render() {
    let {todos} = this.state;

    return (
      <div className="row">
        <div className="column small-centered medium-6 large-4">
          <h1 className="page-title">Todo App</h1>
          <TodoSearch onSearch={this.handleSearch}/>
          <TodoList todos={todos}/>
          <AddTodo onAddTodo={this.handleAddTodo}/>
        </div>
      </div>
    );
  }
}