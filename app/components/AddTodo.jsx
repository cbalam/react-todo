import React from "react";
import {connect} from "react-redux";
import * as actions from "actions";

export class AddTodo extends React.Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    let {dispatch} = this.props;
    let todoText = this.refs.todoText.value;

    if (todoText.length > 0){
      this.refs.todoText.value = '';
      dispatch(actions.startAddTodo(todoText))
    } else {
      this.refs.todoText.focus();
    }
  }

  render() {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.onSubmit} className="addTodo-form">
          <input type="text" ref="todoText" placeholder="What do you need to do?" />
          <button className="button expanded" >Add Todo</button>
        </form>
      </div>
    )
  }
}

AddTodo.propTypes = {
  onAddTodo: React.PropTypes.func
};

export default connect()(AddTodo);