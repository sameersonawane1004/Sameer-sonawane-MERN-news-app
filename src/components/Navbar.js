import React from 'react';
import './Navbar.css';

const Navbar = ({ onAddNews }) => {
  return (
    <nav className="navbar">
      <h1>Daily News</h1>
      <button onClick={onAddNews} className="add-news-button">➕</button>
    </nav>
  );
};

export default Navbar;
