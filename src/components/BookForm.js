import React from 'react';

// import useDispatch hook
import { useDispatch } from 'react-redux';
// import your Action Creators
import { addBook, removeBook } from '../redux/books/books';

const dispatch = useDispatch();

const submitBookToStore = () => {
  const newBook = {
    id, // make sure it's unique
    title,
    author,
  };

  // dispatch an action and pass it the newBook object (your action's payload)
  dispatch(addBook(newBook));
};

  <button onClick={submitBookToStore}>Add Book</button>;

const BookForm = () => (
  <form action="">
    <input placeholder="Title" />
    <input placeholder="Author" />
    <button type="submit">Add book</button>
  </form>
);

export default BookForm;
