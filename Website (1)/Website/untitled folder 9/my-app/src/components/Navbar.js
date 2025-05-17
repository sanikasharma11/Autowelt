import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css'; // Ensure correct import for Navbar styling
import Logo from '../assets/logo.png'; // Adjust path if necessary

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={Logo} alt="Logo" className="navbar-logo-img" />
      </Link>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/products" className="navbar-link">Products</Link> {/* Matches '/products' route */}
        <Link to="/contact" className="navbar-link">Contact</Link> {/* Matches '/contact' route */}
      </div>
    </nav>
  );
};

export default Navbar;
