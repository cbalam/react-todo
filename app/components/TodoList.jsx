import React from "react";
import Todo from "Todo";

export default class TodoList extends React.Component {
  render() {
    let {todos} = this.props;
    const renderTodos = () => {
      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
        ) ;
      });
    };
    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
}