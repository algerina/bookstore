import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';
import Message from './Message';
import { LoadBooks } from '../redux/books/books';

const BooksList = () => {
  const bookList = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (bookList === 0) {
      dispatch(LoadBooks());
    }
  }, [bookList]);

  return (
    <>
      <div className="booklistContainer">

        {bookList.length
          ? bookList.map((book) => (<Book singleBook={book} key={book.id} />))
          : <Message />}

        <BookForm />

      </div>

    </>

  );
};
export default BooksList;
