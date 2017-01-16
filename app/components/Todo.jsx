import React from "react";
import moment from "moment";

export default class Todo extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let {id, text, completed, createdAt, completedAt} = this.props;
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
      <div onClick={() => {this.props.onToggle(id)}}>
        <input type="checkbox" checked={completed} onChange={()=>{}}/>
        {text}
        <p>{renderDate()}</p>
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