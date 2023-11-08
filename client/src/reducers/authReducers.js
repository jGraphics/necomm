// authReducers.js
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
  
  