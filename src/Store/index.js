import { combineReducers, createStore } from "redux";
import uiReducer from "./uiReducer";
import contentReducer from "./contentReducer";

const reducers = combineReducers({ UI: uiReducer, content: contentReducer });

const store = createStore(reducers, {});

export default store;
