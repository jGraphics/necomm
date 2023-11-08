import { combineReducers } from 'redux';
import { authReducer } from './authReducers';
import { cartReducer } from './cartReducers';

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  // ...other reducers for different parts of your app
});

export default rootReducer;
