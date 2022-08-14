import React from 'react';
import './Header.css';

function Header() {
  return (
    <nav className='nav-container'>
      <div className="logo">
        <a href='/' className='logo-text'>Unihire</a>
      </div>
      <div className="nav-item">
        <a href='/' className="nav-item-name">Dashboard</a>
      </div>
    </nav>
  );
}

export default Header