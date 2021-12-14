import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h1>BookStore</h1>
    <ul>
      <li><Link to="/books">Books</Link></li>
      <li><Link to="/categories">Categories</Link></li>
    </ul>
  </nav>
);

export default Navbar;
