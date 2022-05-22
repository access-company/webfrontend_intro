import React, { useEffect } from 'react';

import { useSelector, useDispatch } from '../../app/hooks';
import {
  fetchAuthorsAsync,
  selectAuthors,
} from '../../slices/authors';
import { Presenter } from './Presenter';

export function AuthorsTable() {
  const authors = useSelector(selectAuthors);
  const dispatch = useDispatch();

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
