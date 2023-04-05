import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addNewBook } from '../redux/books/booksSlice';

const NewBookForm = () => {
  const dispatch = useDispatch();
  const [bookInfo, setBookInfo] = useState({ title: '', author: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = uuid();
    const book = { id, ...bookInfo };
    dispatch(addNewBook(book));
    setBookInfo({ title: '', author: '' });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBookInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={bookInfo.title}
        onChange={handleInputChange}
        placeholder="Title"
      />
      <input
        type="text"
        name="author"
        value={bookInfo.author}
        onChange={handleInputChange}
        placeholder="Author"
      />
      <button type="submit">Add New Book</button>
    </form>
  );
};

export default NewBookForm;
