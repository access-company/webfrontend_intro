
import React, { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  fetchAuthorsAsync,
  createAuthorAsync,
  selectAuthors,
  selectAuthorsStatus,
} from '../../slices/authors';
import Presenter from './Presenter';
import './style.css';

export function AuthorsPage() {
  const authors = useAppSelector(selectAuthors)
  const authorsStatus = useAppSelector(selectAuthorsStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (authorsStatus === 'initial') {
      dispatch(fetchAuthorsAsync())
    }
  }, [dispatch, authorsStatus])

  const createAuthor = (firstName: string, lastName: string) => { dispatch(createAuthorAsync({ firstName, lastName })) }

  return <Presenter
    states={{ authors }}
    actions={{ createAuthor }}
  />
}

export default AuthorsPage;
