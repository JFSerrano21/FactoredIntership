import React from 'react';
import './NavBar.css';

import { Link } from 'react-router-dom';
import logo from './assets/Logo.png';

function NavBar() {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <Link to="/">
        <button className="navbar-home">Home</button>
      </Link>
    </div>
  );
}

export default NavBar;
