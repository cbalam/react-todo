import React from "react";
import {connect} from "react-redux";
import * as actions from "actions";

export class TodoSearch extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let {dispatch, showComplete, searchText} = this.props;

    return (
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" value={searchText} onChange={() => {
            let searchText = this.refs.searchText.value;
            dispatch(actions.setSearchText(searchText));
          }}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" checked={showComplete} onChange={() => {
              dispatch(actions.toggleShowCompleted());
            }}/>
            Show completed todos
          </label>
        </div>
      </div>
    )
  }
}

TodoSearch.propTypes = {
  onSearch: React.PropTypes.func
};

export default connect(
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    }
  }
)(TodoSearch);