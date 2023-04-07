import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './BookDisplay';
import { fetchBooksAsync } from '../redux/books/booksSlice';

const BookLists = () => {
  const dispatch = useDispatch();
  const { books, status, error } = useSelector((state) => state.books);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBooksAsync());
    }
  }, [status, dispatch]);

  let content;

  if (status === 'loading') {
    content = <div>Loading...</div>;
  } else if (status === 'succeeded') {
    content = (
      <div>
        {books && books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    );
  } else if (status === 'failed') {
    content = <div>{error}</div>;
  }

  return <div>{content}</div>;
};

export default BookLists;
