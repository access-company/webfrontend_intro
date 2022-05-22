import React, { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  fetchAuthorsAsync,
  selectAuthors,
} from '../../slices/authors';
import { Presenter } from './Presenter';

export function AuthorsTable() {
  const authors = useAppSelector(selectAuthors);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAuthorsAsync())
  }, [dispatch])

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
