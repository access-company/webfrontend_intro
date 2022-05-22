import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Stream } from 'stream';

import { fetchBooks, createBook } from '../../apis/books';
import { RootState } from '../../app/store';
import { Book, BookCreateRequest } from '../../models/Book';

export interface BooksState {
  value: Book[];
  status: 'initial' | 'idle' | 'loading' | 'failed';
}

const initialState: BooksState = {
  value: [],
  status: 'initial',
};

export const fetchBooksAsync = createAsyncThunk(
  'books/fetchBooksAsync',
  async () => {
    const response = await fetchBooks();
    return response.data;
  }
);

export const createBookAsync = createAsyncThunk(
  'books/createBookAsync',
  async ({ title, authorId }: BookCreateRequest) => {
    const response = await createBook(title, authorId);
    return response.data;
  }
);

export const booksSlice = createSlice({
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
        status: 'idle',
        value: action.payload,
      }))
      .addCase(fetchBooksAsync.rejected, (state) => ({
        ...state,
        status: 'failed',
      }))
      .addCase(createBookAsync.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(createBookAsync.fulfilled, (state, action) => {
        const sortedBooks = [...state.value].sort(({ id: id1 }, { id: id2 }) => id1 < id2 ? -1 : 1)
        const newId = [...sortedBooks].reverse()[0]?.id + 1 || 0
        return {
          ...state,
          status: 'idle',
          value: [...sortedBooks, { ...action.payload, id: newId }],
        }
      })
      .addCase(createBookAsync.rejected, (state) => ({
        ...state,
        status: 'failed',
      }));
  },
});

export const selectBooks = (state: RootState) => state.books.value;
export const selectBooksStatus = (state: RootState) => state.books.status;

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default booksSlice.reducer;
