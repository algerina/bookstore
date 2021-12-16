import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { message } from 'antd';
import { v4 as uuid } from 'uuid';
import { addBook } from '../redux/books/books';

const BookForm = () => {
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState({ title: '', author: '' });
  const addBookHandler = (e) => {
    setNewBook({ ...newBook, title: e.target.value });
  };

  const addAuthorHandler = (e) => {
    setNewBook({ ...newBook, author: e.target.value });
  };

  const submitBookToStore = () => {
    const { title, author } = newBook;
    if (title.length && author.length) {
      const newBook = {
        id: uuid(),
        title,
        author,
      };
      dispatch(addBook(newBook));
      setNewBook({ author: '', title: '' });
    } else {
      message.warning('Please enter a value');
    }
  };

  return (
    <div>

      <form>
        <input
          placeholder="Title"
          onChange={addBookHandler}
          value={newBook.title}
        />
        <input
          placeholder="Author"
          onChange={addAuthorHandler}
          value={newBook.author}
        />
      </form>

      <button type="submit" onClick={submitBookToStore}>Add Book</button>

    </div>

  );
};

export default BookForm;
