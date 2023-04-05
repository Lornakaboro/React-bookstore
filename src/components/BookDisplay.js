import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <>
      <p key={book.id}>
        <strong>{book.title}</strong>
        {' '}
        <span>by</span>
        {' '}
        <strong>{book.author}</strong>
      </p>
      <button
        type="button"
        onClick={() => {
          dispatch(deleteBook(book.id));
        }}
      >
        Delete
      </button>
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
