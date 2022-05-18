import React, { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectAuthors, selectAuthorsStatus, fetchAuthorsAsync } from '../../slices/authors';
import { selectBooks, selectBooksStatus, fetchBooksAsync, createBookAsync } from '../../slices/books';
import Presenter from './Presenter';
import './style.css';

function BooksPage() {
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

  const createBook = (title: string, authorId: number) => { dispatch(createBookAsync({ title, authorId })) }

  return (
    <Presenter
      states={{ authors, books }}
      actions={{ createBook }}
    />
  );
}

export default BooksPage;
