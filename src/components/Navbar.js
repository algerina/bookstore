import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h1>BookStore</h1>
    <ul>
      <li><Link to="/">Books</Link></li>
      <li><Link to="/">Categories</Link></li>
    </ul>
  </nav>
);

export default Navbar;
