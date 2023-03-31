import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ bookItem }) => (
  <>
    <p key={bookItem.id} className="books">
      <strong>{bookItem.title}</strong>
      {' '}
      <span>by</span>
      {' '}
      <strong>{bookItem.author}</strong>
    </p>
    <button type="button">Delete</button>
  </>
);

Book.propTypes = {
  bookItem: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default Book;
