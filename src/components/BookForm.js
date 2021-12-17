import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { message } from 'antd';
import { v4 as uuid } from 'uuid';
import { addBook } from '../redux/books/books';
import '../App.css';

const BookForm = () => {
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState({ title: '' });
  const addBookHandler = (e) => {
    setNewBook({ ...newBook, title: e.target.value });
  };

  const submitBookToStore = () => {
    const { title } = newBook;
    if (title.length) {
      const newBook = {
        item_id: uuid(),
        title,
        category: 'Poetry',
      };
      dispatch(addBook(newBook));
      setNewBook({ title: '' });
    } else {
      message.warning('Please enter a value');
    }
  };

  return (
    <div className="formWrapper">

      <form className="form">
        <h2 className="form-title">Add New Book</h2>
        <input
          placeholder="Title"
          onChange={addBookHandler}
          value={newBook.title}
          className="form-title-input"
        />
        <input
          placeholder="Category"
          className="form-category-input"
        />
      </form>

      <button type="submit" className="addBtn" onClick={submitBookToStore}>Add Book</button>

    </div>

  );
};

export default BookForm;
