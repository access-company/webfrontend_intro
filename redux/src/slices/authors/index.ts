import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchAuthors, createAuthor } from '../../apis/authors';
import { RootState } from '../../app/store';
import { Author, AuthorCreateRequest } from '../../models/Author';

export interface AuthorsState {
  value: Author[];
  status: 'initial' | 'idle' | 'loading' | 'failed';
}

const initialState: AuthorsState = {
  value: [],
  status: 'initial',
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

export const authorsSlice = createSlice({
  name: 'authors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthorsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAuthorsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      })
      .addCase(fetchAuthorsAsync.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(createAuthorAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createAuthorAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const sortedAuthors = [...state.value].sort(({ id: id1 }, { id: id2 }) => id1 < id2 ? -1 : 1)
        const newId = [...sortedAuthors].reverse()[0]?.id + 1 || 0
        state.value = [...sortedAuthors, { ...action.payload, id: newId }];
      })
      .addCase(createAuthorAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectAuthorsStatus = (state: RootState) => state.authors.status;
export const selectAuthors = (state: RootState) => state.authors.value;

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default authorsSlice.reducer;
