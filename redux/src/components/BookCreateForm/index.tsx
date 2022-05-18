import React, { useEffect, useState } from 'react';

import { Author } from '../../models/Author';
import { Presenter } from './Presenter';

interface Props {
  states: {
    authors: Author[]
  }
  actions: {
    createBook: (title: string, authorId: number) => void
  }
}

export function BookCreateForm(props: Props) {
  const {
    states: { authors },
    actions: { createBook },
  } = props

  const [title, setTitle] = useState('')
  const [authorId, setAuthorId] = useState<number>(authors[0]?.id)

  useEffect(() => {
    if (authorId == null) {
      setAuthorId(authors[0]?.id)
    }
  }, [authorId, authors])

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
