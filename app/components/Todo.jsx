import React from "react";

export default class Todo extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let {id, text, completed} = this.props;
    return (
      <div onClick={() => {this.props.onToggle(id)}}>
        <input type="checkbox" checked={completed} onChange={()=>{}}/>
        {text}
      </div>
    );
  }
}

Todo.propTypes = {
  onToggle: React.PropTypes.func
};