import React from "react";
import moment from "moment";

export default class Todo extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let {id, text, completed, createdAt, completedAt} = this.props;
    let todoClassName = completed ? 'todo todo-completed' : 'todo';
    let renderDate = () => {
      let message = 'Created ';
      let timestamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timestamp = completedAt
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };
    return (
      <div className={todoClassName} onClick={() => {this.props.onToggle(id)}}>
        <input type="checkbox" checked={completed} onChange={()=>{}}/>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    );
  }
}

Todo.propTypes = {
  onToggle: React.PropTypes.func,
  text: React.PropTypes.string,
  completed: React.PropTypes.bool,
  createdAt: React.PropTypes.number,
  completedAt: React.PropTypes.number
};