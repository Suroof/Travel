import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Travel To World</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">首页</Link></li>
        <li><Link to="/destinations">目的地</Link></li>
        <li><Link to="/tours">旅游路线</Link></li>
        <li><Link to="/about">关于我们</Link></li>
        <li><Link to="/contact">联系我们</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;