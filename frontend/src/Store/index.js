// src/Store/index.js
import { authReducer } from "./reducers/auth";
import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';

export const store = createStore(authReducer,applyMiddleware(thunk));
