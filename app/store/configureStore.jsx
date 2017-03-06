import * as redux from "redux";
import thunk from "redux-thunk";
import {searchTextReducer, showCompletedReducer, todosReducer, authReducer} from "reducers";

export const configure = (initialState = {}) => {
   let reducer = redux.combineReducers({
     searchText: searchTextReducer,
     showCompleted: showCompletedReducer,
     todos: todosReducer,
     auth: authReducer
   });

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux.compose;
  return redux.createStore(reducer, initialState, composeEnhancers(
    redux.applyMiddleware(thunk)
  ));
};