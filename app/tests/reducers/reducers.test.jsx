import expect from "expect"
import df from "deep-freeze-strict";
import * as reducers from "reducers";

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      let action = {
        type: 'SET_SEARCH_TEXT',
        searchTex: 'dog'
      };

      let res = reducers.searchTextReducer(df(''), df(action));
      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      let action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };

      let state = false;
      let res = reducers.showCompletedReducer(df(state), df(action));
      expect(res).toBe(!state);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      let action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abc123',
          text: 'Walk the dog',
          completed: false,
          createdAt: 92384275
        }
      };

      let res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should add existing todos', () => {
      let todos = [{
        id: '111',
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 33000
      }];

      let action = {
        type: 'ADD_TODOS',
        todos
      };

      let res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toBe(1);
      expect(res[0]).toEqual(todos[0]);
    });

    it('should toggle todo', () => {
      let action = {
        type: 'TOGGLE_TODO',
        id: 1
      };

      let todos = [
        {
          id: 1,
          text: 'Walk the dog',
          completed: true,
          createdAt: 0,
          completedAt: undefined
        }
      ];

      let res = reducers.todosReducer(df(todos), df(action));
      expect(res[0].completed).toBe(false);
      expect(res[0].completedAt).toEqual(undefined);
    });
  });
});