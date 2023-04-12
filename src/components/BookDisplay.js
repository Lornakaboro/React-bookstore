import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAsync } from '../redux/books/booksSlice';
import ProgressBar from './progress';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    dispatch(removeBookAsync(book.id));
  };
  return (
    <>
      <div className="book-container">
        <div className="book-items">
          <p key={book.id} className="books">
            <strong className="title">{book.title}</strong>
            {' '}
            {' '}
            <strong className="author">{book.author}</strong>
          </p>
          <div className="buttons">
            <button type="button" className="btn">
              Comments
            </button>
            <div className="Line-2" />
            <button
              type="button"
              className="btn"
              onClick={handleDeleteClick}
            >
              Remove
            </button>
            <div className="Line-2" />
            <button type="button" className="btn">
              Edit
            </button>
          </div>
        </div>
        <div className="progress">
          <div className="spinner">
            <ProgressBar />
            <p className="Percent-Complete">
              {Math.floor(Math.random() * (99 - 0)) + 0}
              <span className="percent">%</span>
              <p>completed</p>
            </p>
          </div>
          <div className="Line" />

          <div className="current">
            <p>CURRENT CHAPTER</p>
            <h5>Chapter 23</h5>
            <br />
            <button type="button" className="update-progress">
              UPDATE PROGRESS
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default Book;
