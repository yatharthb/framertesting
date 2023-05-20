// components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-links">
          <NavLink className="navbar-link" activeClassName="active" exact to="/">Home</NavLink>
          <NavLink className="navbar-link" activeClassName="active" to="/products">Products</NavLink>
          <NavLink className="navbar-link" activeClassName="active" to="/faq">FAQ</NavLink>
          <NavLink className="navbar-link" activeClassName="active" to="/about">About Us</NavLink>
          <NavLink className="navbar-link" activeClassName="active" to="/contact">Contact</NavLink>
        </div>
        <div className="navbar-auth">
          <button className="navbar-button">Sign In</button>
          <button className="navbar-button">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;