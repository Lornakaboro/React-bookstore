import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookAsync } from '../redux/books/booksSlice';

const NewBookForm = () => {
  const dispatch = useDispatch();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const id = uuidv4();
    const title = event.target.elements.title.value;
    const author = event.target.elements.author.value;
    await dispatch(addBookAsync({
      id, title, author,
    }));
    event.target.reset();
    window.location.reload();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        required
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        required
      />
      <button type="submit">Add New Book</button>
    </form>
  );
};

export default NewBookForm;
