import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBook } from '../redux/books/books';
import 'react-circular-progressbar/dist/styles.css';
import '../App.css';

const Book = (props) => {
  const dispatch = useDispatch();
  const percentage = 66;
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
      <div className="progress-percent">

        <div className="percent">
          <div style={{ width: 70, height: 70 }}>

            <CircularProgressbar value={percentage} text={`${percentage}%`} />
          </div>
          <div className="percent-inner">

            <span className="completed">Completed</span>
          </div>
        </div>

        <div className="progress">

          <div className="update-container">
            <span className="chapter">CURRENT CHAPTER</span>
            <span className="chapter">CHAPTER 17</span>
            <button type="button" className="update"><span>UPDATE PROGRESS</span></button>
          </div>
        </div>
      </div>
    </div>

  );
};
Book.propTypes = {
  singleBook: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Book;
