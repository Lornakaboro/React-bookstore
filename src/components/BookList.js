import React from 'react';
import { useSelector } from 'react-redux';
import Book from './BookDisplay';

const BookLists = () => {
  const books = useSelector((state) => state.books.books);

  return (
    <div>
      {books && books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookLists;
