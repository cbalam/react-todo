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
});