import React from 'react';

const Book = (props) => {
  const { abook } = props;
  return (
    <div>
      <div>
        <span>{abook.title}</span>
        <span>--</span>
        <span>{abook.author}</span>
      </div>
      <button type="button">Remove</button>
    </div>
  );
};

export default Book;
