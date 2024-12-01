// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../Styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo">JobEntry</h1>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className={`menu ${menuOpen ? 'active' : ''}`}>
        <div className="close-icon" onClick={toggleMenu}>
          &times;
        </div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/contact">Contact</Link>
        <button className="post-job-btn">Post A Job</button>
      </div>
      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/contact">Contact</Link>
        <button className="post-job-btn">Post A Job</button>
      </div>
    </nav>
  );
}

export default Navbar;
