import React from 'react';
import NewBookForm from '../components/Forms';
import BookLists from '../components/BookList';

export default function HomePage() {
  return (
    <div className="home-page">
      <BookLists />
      <NewBookForm />
    </div>
  );
}
