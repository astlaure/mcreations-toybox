import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <a href="#">MCreations Toybox</a>
      </div>
      <ul className="nav-menu ml-auto">
        <li className="nav-item"><a href="#" className="btn">Login</a></li>
        <li className="nav-item"><Link to="/register">Register</Link></li>
        <li className="nav-item"><a href="#">Logout</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;
