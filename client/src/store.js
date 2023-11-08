import { createStore, applyMiddleware, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'; // You may use other middleware as needed
import rootReducer from './reducers/rootReducer'; // Import your root reducer

const middleware = [thunk]; // Add middleware as needed

const store = configureStore(
  rootReducer, applyMiddleware(...middleware)
);

export default store;
