import React, { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchAuthorsAsync, selectAuthors } from '../../slices/authors';
import { fetchBooksAsync, selectBooks } from '../../slices/books';
import { Presenter } from './Presenter';

export function BooksTable() {
  const authors = useAppSelector(selectAuthors);
  const books = useAppSelector(selectBooks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAuthorsAsync())
    dispatch(fetchBooksAsync())
  }, [dispatch])

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
