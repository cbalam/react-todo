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

    it('should wipe todos on logut', () => {
      let todos = [{
        id: '111',
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 33000
      }];

      let action = {
        type: 'LOGOUT'
      };

      let res = reducers.todosReducer(df([todos]), df(action));
      expect(res.length).toBe(0);
    });

    it('should toggle todo', () => {

      let todos = [{
        id: 1,
        text: 'Walk the dog',
        completed: true,
        createdAt: 123,
        completedAt: 124
      }];

      let updates = {
        completed: false,
        completedAt: null
      };

      let action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };

      let res = reducers.todosReducer(df(todos), df(action));
      expect(res[0].completed).toBe(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text)
    });
  });

  describe('authReducer', () => {
    it('should store uid on auth object', () => {
      let action = {
        type: 'LOGIN',
        uid: '123'
      };

      let res = reducers.authReducer(undefined, df(action));
      expect(res.uid).toEqual(action.uid);
    });

    it('should logout', () => {

      const auth = {
        uid: '123'
      };
      let action = {
        type: 'LOGOUT'
      };

      let res = reducers.authReducer(df([auth]), df(action));
      expect(res).toEqual({});
    });
  });
});