import expect from "expect";
import * as actions from "actions";

describe('Actions', () => {
  it('Should generate search text action', () => {
    let action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };

    let res = actions.setSearchText(action.searchText);
    expect(res).toEqual(action);
  });

  it('Should generate add todo action', () => {
    let action = {
      type: 'ADD_TODO',
      text: 'Some text'
    };

    let res = actions.addTodo(action.text);
    expect(res).toEqual(action);
  });

  it('Should generate toggle show completed action', () => {
    let action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };

    let res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });

  it('Should generate tpggle todo action', () => {
    let action = {
      type: 'TOGGLE_TODO',
      id: 1
    };

    let res = actions.toggleTodo(action.id);
    expect(res).toEqual(action);
  });
});