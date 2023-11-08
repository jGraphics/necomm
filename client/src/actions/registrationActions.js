export const registerRequest = () => ({ type: REGISTER_REQUEST });
export const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, user });
export const registerFailure = (error) => ({ type: REGISTER_FAILURE, error });