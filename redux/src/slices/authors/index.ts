import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchAuthors, createAuthor } from '../../apis/authors';
import { RootState } from '../../app/store';
import { Author, AuthorCreateRequest } from '../../models/Author';
import Action from '../../util/models/Action';

export interface AuthorsState {
  value: Author[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: AuthorsState = {
  value: [],
  status: 'idle',
};

export const fetchAuthorsAsync = createAsyncThunk(
  'authors/fetchAuthorsAsync',
  async () => {
    const response = await fetchAuthors();
    return response.data;
  }
);

export const createAuthorAsync = createAsyncThunk(
  'authors/createAuthorAsync',
  async ({ firstName, lastName }: AuthorCreateRequest) => {
    const response = await createAuthor(firstName, lastName);
    return response.data;
  }
);

const mockFetchAuthors =
  (fn: ((state: AuthorsState, action?: Action<Author[]>) => AuthorsState)) =>
  (state: AuthorsState, action?: Action<Author[]>) =>
  state.value.length ? state : fn(state, action)

export const authorsSlice = createSlice({
  name: 'authors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthorsAsync.pending, mockFetchAuthors((state) => ({
        ...state,
        status: 'loading',
      })))
      .addCase(fetchAuthorsAsync.fulfilled, mockFetchAuthors((state, action) => ({
        ...state,
        status: 'idle',
        value: action?.payload as Author[],
      })))
      .addCase(fetchAuthorsAsync.rejected, mockFetchAuthors((state) => ({
        ...state,
        status: 'failed',
      })))
      .addCase(createAuthorAsync.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(createAuthorAsync.fulfilled, (state, action) => {
        const sortedAuthors = [...state.value].sort(({ id: id1 }, { id: id2 }) => id1 < id2 ? -1 : 1)
        const newId = [...sortedAuthors].reverse()[0]?.id + 1 || 0
        return {
          ...state,
          status: 'idle',
          value: [...sortedAuthors, { ...action.payload, id: newId }],
        }
      })
      .addCase(createAuthorAsync.rejected, (state) => ({
        ...state,
        status: 'failed',
      }));
  },
});

export const selectAuthorsStatus = (state: RootState) => state.authors.status;
export const selectAuthors = (state: RootState) => state.authors.value;

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default authorsSlice.reducer;
