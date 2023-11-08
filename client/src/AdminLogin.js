import React from 'react';
import { Navigate } from "react-router-dom";

class AdminLogin extends React.Component {
  state = { user: null, error: null };

  async handleSubmit(event) {
    event.preventDefault();
    try {
      // Assuming you have a login function, import it here
      // For example: import { login } from './your-auth-module';
      let user = await login(event.target);
      this.setState({ user });
    } catch (error) {
      this.setState({ error });
    }
  }

  render() {
    let { user, error } = this.state;

    return (
      <div className="container">
        <h2>Admin Login</h2>
        {error && <p>{error.message}</p>}
        {user && (
          <Navigate to="/dashboard" replace={true} />
        )}
        <form
          onSubmit={(event) => this.handleSubmit(event)}
        >
          <input type="text" name="username" />
          <input type="password" name="password" />
          <button type="submit">Login</button>
        </form>
        {/* Add your login form and components here */}
      </div>
    );
  }
}

export default AdminLogin;
