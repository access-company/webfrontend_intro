import React, { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchAuthorsAsync, selectAuthors, selectAuthorsStatus } from '../../slices/authors';
import {
  createBookAsync,
} from '../../slices/books';
import { Presenter } from './Presenter';

export function BookCreateForm() {
  const authors = useAppSelector(selectAuthors);
  const authorsStatus = useAppSelector(selectAuthorsStatus);
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState('')
  const [authorId, setAuthorId] = useState<number>(authors[0]?.id)

  useEffect(() => {
    if (authorsStatus === 'initial') {
      dispatch(fetchAuthorsAsync())
    }
  }, [dispatch, authorsStatus])

  useEffect(() => {
    if (authorId == null) {
      setAuthorId(authors[0]?.id)
    }
  }, [authorId, authors])

  const createBook = (title: string, authorId: number) => { dispatch(createBookAsync({ title, authorId })) }

  return (<Presenter
    {
      ...{
        states: {
          title,
          authorId,
          authors,
        },
        actions: {
          setTitle,
          setAuthorId,
          createBook,
        }
      }
    }
  />)
}
