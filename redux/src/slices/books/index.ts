import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer/dist/internal';

import { fetchBooks, createBook } from '../../apis/books';
import { RootState } from '../../app/store';
import { Book, BookCreateRequest } from '../../models/Book';
import Action from '../../util/models/Action';

export interface BooksState {
  value: Book[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: BooksState = {
  value: [],
  status: 'idle',
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

const mockFetchBooks =
  (fn: ((state: BooksState, action?: Action<Book[]>) => BooksState)) =>
  (state: BooksState, action?: Action<Book[]>) =>
  state.value.length ? state : fn(state, action)

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksAsync.pending, mockFetchBooks((state) => ({
        ...state,
        status: 'loading',
      })))
      .addCase(fetchBooksAsync.fulfilled, mockFetchBooks((state, action) => ({
        ...state,
        status: 'idle',
        value: action?.payload as Book[],
      })))
      .addCase(fetchBooksAsync.rejected, mockFetchBooks((state) => ({
        ...state,
        status: 'failed',
      })))
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
