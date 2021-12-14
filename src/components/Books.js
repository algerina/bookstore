import React from 'react';
import BookForm from './BookForm';
import Book from './Book';

const Books = () => (
  <div>
    <ul>
      <Book />
    </ul>

    <BookForm />
  </div>
);

export default Books;
