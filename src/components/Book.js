import React from 'react';
import PropTypes from 'prop-types';
import { Progress } from 'antd';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import '../App.css';

const Book = (props) => {
  const dispatch = useDispatch();
  const { singleBook } = props;
  const {
    id, category, title,
  } = singleBook;

  return (
    <div className="singleBook">
      <div>
        <div>

          <span className="category">{category}</span>
          <h2 className="title">{title}</h2>
          <span className="author">author</span>

        </div>

        <div>
          <ul className="singleUl">
            <li className="comment">Comments</li>
            <li onClick={() => dispatch(removeBook(id))} aria-hidden="true" className="remove">Remove</li>
            <li className="edit">Edit</li>
          </ul>
        </div>
      </div>


      <div className="progress">

        <div className="update-container">
          <span className="chapter">Current Chapter</span>
          <span className="chapter">chapter3</span>
          <button type="button" className="update"><span>UPDATE PROGRESS</span></button>
        </div>
      </div>
    </div>

  );
};
Book.propTypes = {
  singleBook: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Book;
