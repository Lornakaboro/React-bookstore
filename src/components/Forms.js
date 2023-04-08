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
    <div className="book-input">
      <div className="hr" />
      <h3 className="addTitle Text-Style-10">
        ADD NEW BOOK
      </h3>
      <form onSubmit={handleFormSubmit} className="form-input">

        <input
          type="text"
          name="title"
          placeholder="Title"
          className="form-input"
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          className="form-input"
          required
        />
        <button type="submit" className="add-btn">ADD BOOK</button>
      </form>
    </div>
  );
};

export default NewBookForm;
