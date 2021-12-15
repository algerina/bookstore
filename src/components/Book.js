import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <span>{abook.title}</span>
        <span>--</span>
        <span>{abook.author}</span>
      </div>
      <button type="button" onClick={() => { dispatch(removeBook(id)); }}>Remove</button>
    </div>

  );
};

export default Book;
