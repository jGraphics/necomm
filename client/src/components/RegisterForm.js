import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from "../actionTypes/registrationActionTypes"; // Adjust import here



function RegisterForm() {
  const dispatch = useDispatch();
  const authState = useSelector(state => state.auth);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = e => {
    e.preventDefault();

    // Dispatch the registerRequest action to indicate registration is in progress
    dispatch({ type: REGISTER_REQUEST });

    // Simulate a registration process
    setTimeout(() => {
      // Check registration data (you can replace this with your registration logic)
      if (formData.firstName && formData.lastName && formData.email && formData.password) {
        const user = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
        };
        // Dispatch registerSuccess if registration is successful
        dispatch({type: REGISTER_SUCCESS, user});
      } else {
        // Dispatch registerFailure if registration fails
        const error = "Registration failed"; // Simulated error message
        dispatch({type: REGISTER_FAILURE, error});
      }
    }, 2000);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>First name</label>
        <input type="text" className="form-control" name="firstName" value={formData.firstName} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Last name</label>
        <input type="text" className="form-control" name="lastName" value={formData.lastName} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required />
      </div>
      <button type="submit" className="btn btn-primary">Register</button>
      {authState.isLoading && <p> Loading...</p>}
      {authState.error && <p>Error: {authState.error}</p>}
      <Link to="/register" className="ml-2">Register</Link>
    </form>
  );
}

export default RegisterForm;
