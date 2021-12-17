import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import './App.css';

const App = () => (
  <div className="panel-bg">
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Books />} exact />
          <Route path="/categories" element={<Categories />} exact />
        </Routes>
      </div>
    </Router>
  </div>
);

export default App;
