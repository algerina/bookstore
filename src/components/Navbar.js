import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './nav.css';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="nav1">BOOKSTORE CMS</h1>
    <ul className="navList">
      <li><Link to="/books" className="nav2">Books</Link></li>
      <li><Link to="/categories" className="nav3">Categories</Link></li>
      <li>
        <span className="user user-icon">
          <FontAwesomeIcon icon={faUser} />
        </span>
      </li>
    </ul>
  </nav>
);

export default Navbar;
