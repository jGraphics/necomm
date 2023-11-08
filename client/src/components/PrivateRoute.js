import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, role, ...rest }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const userRole = useSelector(state => state.auth.user.role);

  return (
    <Route {...rest} render={props => (
      isAuthenticated && (!role || userRole === role) ?
        <Component {...props} /> :
        <Navigate to="/login" />
    )} />
  );
}

export default PrivateRoute;
