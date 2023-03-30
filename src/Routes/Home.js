import React from 'react';
import Form from '../components/Forms';
import BookLists from '../components/BookList';

export default function HomePage() {
  return (
    <div className="home-page">
      <BookLists />
      <Form />
    </div>
  );
}
