/** @format */

import { combineReducers, createStore } from "redux";
import counterReducer from "./counterSlice";

const reducer = combineReducers({
  calculator: counterReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
