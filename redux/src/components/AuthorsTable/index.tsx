import React, { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  fetchAuthorsAsync,
  selectAuthors,
  selectAuthorsStatus,
} from '../../slices/authors';
import { Presenter } from './Presenter';

export function AuthorsTable() {
  const authors = useAppSelector(selectAuthors);
  const authorsStatus = useAppSelector(selectAuthorsStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (authorsStatus === 'initial') {
      dispatch(fetchAuthorsAsync())
    }
  }, [dispatch, authorsStatus])

  return (<Presenter
    {
      ...{
        states: {
          authors,
        }
      }
    }
  />)
}
