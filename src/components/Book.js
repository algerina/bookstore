import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const { singleBook } = props;
  const {
    id, genre, title, author,
  } = singleBook;

  return (
    <div>
      <div>
        <div>

          <span>{genre}</span>
          <h2>{title}</h2>
          <span>{author}</span>

        </div>

        <div>
          <ul>
            <li>Comments</li>
            <li onClick={() => dispatch(removeBook(id))} aria-hidden="true">Remove</li>
            <li>Edit</li>
          </ul>
        </div>
      </div>

      <div>

        <div>
          <button type="button"><span>UPDATE PROGRESS</span></button>
        </div>
      </div>
    </div>

  );
};
Book.propTypes = {
  singleBook: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Book;
