import React, { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchAuthorsAsync, selectAuthors, selectAuthorsStatus } from '../../slices/authors';
import {
  fetchBooksAsync,
  selectBooks,
  selectBooksStatus,
} from '../../slices/books';
import { Presenter } from './Presenter';

export function BooksTable() {
  const authors = useAppSelector(selectAuthors);
  const authorsStatus = useAppSelector(selectAuthorsStatus);
  const books = useAppSelector(selectBooks);
  const booksStatus = useAppSelector(selectBooksStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (authorsStatus === 'initial') {
      dispatch(fetchAuthorsAsync())
    }
    if (booksStatus === 'initial') {
      dispatch(fetchBooksAsync())
    }
  }, [dispatch, authorsStatus, booksStatus])

  return (<Presenter
    {
      ...{
        states: {
          authors,
          books,
        }
      }
    }
  />)
}
