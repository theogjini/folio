import { combineReducers, createStore } from "redux";
import uiReducer from "./uiReducer";
import { initialState } from "./initialState";

const reducers = combineReducers({ UI: uiReducer });

const store = createStore(reducers, initialState);

export default store;
