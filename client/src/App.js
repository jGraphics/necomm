import React from "react"
import { BrowserRouter as Router,NavLink, Routes, Route } from "react-router-dom"
import { useSelector } from "react-redux"
import bootstrap from 'bootstrap';
import LoginForm from "./components/LoginForm"
import RegisterForm from "./components/RegisterForm"
import ProductList from "./components/ProductList"
import ProductDetail from "./components/ProductDetail"
import ShoppingCart from "./components/ShoppingCart"
import AdminPanel from "./AdminPanel"
import PrivateRoute from "./components/PrivateRoute"

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/cart" className="nav-link">Cart</NavLink>
            </li>
          </ul>
          {!isAuthenticated && (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink exact to="/login" className="nav-link">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/register" className="nav-link">Register</NavLink>
              </li>
            </ul>
          )}
        </nav>
        <Routes>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/product/:id" component={ProductDetail} />
          <Route exact path="/cart" component={ShoppingCart} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/register" component={RegisterForm} />
          <PrivateRoute exact path="/admin" role="admin" component={AdminPanel} />
          {/* <PrivateRoute exact path="/other-protected-route" role="user" component={OtherProtectedComponent} /> */}

        </Routes>
      </div>
    </Router>
  )
}

export default App;