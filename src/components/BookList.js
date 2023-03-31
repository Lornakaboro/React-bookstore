import React from 'react';
import Book from './BookDisplay';

const BookLists = () => {
  const singleBook = [
    {
      id: 1,
      title: 'Rich Dad Poor Dad',
      author: 'Robert Kiyosaki',
    },
    {
      id: 2,
      title: 'The Monk Who Sold his Ferrari',
      author: 'Robin Sharma',
    },
    {
      id: 3,
      title: 'How to Talk to Anyone',
      author: 'Leil Lowndes',
    },
    {
      id: 4,
      title: 'Gifted Hands',
      author: 'Ben Carson',
    },
    {
      id: 5,
      title: 'The River and the Source',
      author: 'Margaret A Ogola',
    },
  ];

  return (
    <div className="books">
      {singleBook.map((bookItem) => (
        <Book key={bookItem.id} bookItem={bookItem} />
      ))}
    </div>
  );
};

export default BookLists;
