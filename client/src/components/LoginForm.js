import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actionTypes/authActionTypes"; // Adjust import here


function LoginForm() {
  const dispatch = useDispatch();
  const authState = useSelector(state => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = e => {
    e.preventDefault();

    // Dispatch the loginRequest action to indicate login is in progress
    dispatch({ type: LOGIN_REQUEST });


    // Simulate a login process
    setTimeout(() => {
      // Check login credentials (you can replace this with your authentication logic)
      if (formData.email === "example@email.com" && formData.password === "password") {
        const user = { username: "exampleUser" };
        // Dispatch loginSuccess if login is successful
        dispatch({type: LOGIN_SUCCESS, user});
      } else {
        // Dispatch loginFailure if login fails
        const error = "Login failed"; // Simulated error message
        dispatch({type: LOGIN_FAILURE, error});
      }
    }, 2000);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required />
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
      {authState.isLoading && <p> Loading...</p>}
      {authState.error && <p>Error: {authState.error}</p>}

      <Link to="/login" className="ml-2">Register</Link>
    </form>
  );
}

export default LoginForm;
