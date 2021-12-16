import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';
import Message from './Message';

const BooksList = () => {
  const bookList = useSelector((state) => state.booksReducer);

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
