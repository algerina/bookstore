import React, { useState } from 'react';
import Book from './Book';
import BookForm from './BookForm';

const Booklist = () => {
  const [data] = useState([
    {
      id: 1,
      title: 'Eloquent JavaScript',
      author: 'Marjin Haverbeke',
    },
    {
      id: 2,
      title: 'The power of now',
      author: 'Eckhart Tole',
    },
    {
      id: 3,
      title: 'Forgetfulness',
      author: 'Mahmoud Darwish',
    },
  ]);

  return (
    <div>
      {data.map((book) => (
        <Book abook={book} key={book.id} />
      ))}
      ;
      <BookForm />
    </div>
  );
};

export default Booklist;
