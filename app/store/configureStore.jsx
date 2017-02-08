import * as redux from "redux";
import {searchTextReducer, showCompletedReducer, todosReducer} from "reducers";

export const configure = () => {
   let reducer = redux.combineReducers({
     searchText: searchTextReducer,
     showCompleted: showCompletedReducer,
     todos: todosReducer
   });

  return redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
};