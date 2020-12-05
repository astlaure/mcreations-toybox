import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div>
        <a href="#">MCreations Toybox</a>
      </div>
      <ul>
        <li><a href="#">Login</a></li>
        <li><a href="#">Logout</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;
