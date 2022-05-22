import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from '../../app/hooks';
import { fetchAuthorsAsync, selectAuthors, selectAuthorsStatus } from '../../slices/authors';
import {
  createBookAsync,
} from '../../slices/books';
import { Presenter } from './Presenter';

export function BookCreateForm() {
  const authors = useSelector(selectAuthors);
  const dispatch = useDispatch();

  const [title, setTitle] = useState('')
  const [authorId, setAuthorId] = useState<number>(authors[0]?.id)

  useEffect(() => {
    dispatch(fetchAuthorsAsync())
  }, [dispatch])

  useEffect(() => {
    if (authorId == null) {
      setAuthorId(authors[0]?.id)
    }
  }, [authorId, authors])

  const createBook = (title: string, authorId: number) => {
    // 本を作成する処理を追加してください。
  }

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
