import React from 'react';

const Form = () => (
  <form className="book-input">
    <input type="text" name="title" placeholder="title" />
    <input type="text" name="author" placeholder="author" />
    <button type="button">Add Book</button>
  </form>
);

export default Form;
