// authReducers.js
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS} from "../actionTypes/authActionTypes";
import { REGISTER_FAILURE,REGISTER_REQUEST,REGISTER_SUCCESS } from "../actionTypes/registrationActionTypes";

const initialState = {
    user: null,
    error: null,
    isLoading: false,
  };
  
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
      case REGISTER_REQUEST:
        return { ...state, isLoading: true };
      case LOGIN_SUCCESS:
      case REGISTER_SUCCESS:
        return { ...state, user: action.user, isLoading: false };
      case LOGIN_FAILURE:
      case REGISTER_FAILURE:
        return { ...state, error: action.error, isLoading: false };
      default:
        return state;
    }
  };
  
  