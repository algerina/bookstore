import React from 'react';
import  { Route } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import './App.css';

const App = () => (
  <>
    <Navbar />
    <Route path="/Books">
      <Books />
    </Route>
    <Route path="/Categories">
      <Categories />
    </Route>
  </>
);

export default App;
