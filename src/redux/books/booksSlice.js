import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const BOOKS_ENDPOINT = 'hIfsh0ePa2gsXIfovrJY/books/';
const API_URL = BASE_URL + BOOKS_ENDPOINT;

const convertDataToObject = (data) => {
  const newDataArray = [];
  data.forEach((element) => {
    const newObject = {
      id: element[0],
      title: element[1][0].title,
      author: element[1][0].author,
      category: element[1][0].category,
    };
    newDataArray.push(newObject);
  });
  return newDataArray;
};

export const fetchBooksAsync = createAsyncThunk('books/fetchBooksAsync', async () => {
  const response = await axios.get(API_URL);
  const { data } = response;
  return convertDataToObject(Object.entries(data));
});

export const addBookAsync = createAsyncThunk('books/addBookAsync', async ({ id, title, author }) => {
  const response = await axios.post(API_URL, {
    item_id: id,
    title,
    author,
    category: 'health',
  }, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
});

export const removeBookAsync = createAsyncThunk('books/removeBookAsync', async (bookId) => {
  await axios.delete(`${API_URL}${bookId}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return bookId;
});

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksAsync.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchBooksAsync.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        books: action.payload,
      }))
      .addCase(fetchBooksAsync.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      .addCase(addBookAsync.fulfilled, (state, action) => ({
        ...state,
        books: [...state.books, action.payload],
      }))
      .addCase(removeBookAsync.fulfilled, (state, action) => {
        const bookIndex = state.books.findIndex((book) => book.id === action.payload);
        if (bookIndex !== -1) {
          const newBooks = [...state.books];
          newBooks.splice(bookIndex, 1);
          return {
            ...state,
            books: newBooks,
          };
        }
        return state;
      });
  },
});

export const { addNewBook, deleteBook } = booksSlice.actions;
export default booksSlice.reducer;
