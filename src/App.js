import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import './App.css';

const App = () => (
  <Router>
    <Navbar />
    <div>
      <Routes>
        <Route path="/books" element={<Books />} exact />
        <Route path="/categories" element={<Categories />} exact />
      </Routes>
    </div>
  </Router>
);

export default App;
