import { createSlice } from '@reduxjs/toolkit';

const initialBookState = {
  books: [],
};

const bookSlice = createSlice({
  name: 'book',
  initialState: initialBookState,
  reducers: {
    addNewBook: (state, action) => ({
      ...state,
      books: [...state.books, action.payload],
    }),
    removeExistingBook: (state, action) => ({
      ...state,
      books: state.books.filter((book) => book.id !== action.payload.id),
    }),
  },
});

export const { addNewBook, removeExistingBook } = bookSlice.actions;
export default bookSlice.reducer;
