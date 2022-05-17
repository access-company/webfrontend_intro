import React from 'react';
import { Author } from '../../models/Author';

import styles from './style.module.css';

interface Props {
  states: {
    title: string
    authorId?: number
    authors: Author[]
  }
  actions: {
    setTitle: (title: string) => void
    setAuthorId: (authorId: number) => void
    createBook: Function
  }
}

export function Presenter(props: Props) {
  const {
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
  } = props

  return (
    <div>
      <div>
        <span>Title</span>
        <input type="text" name="title" onChange={e => setTitle(e.target.value)} value={title} />
      </div>
      <div>
        <span>Author</span>
        <select name="authorId" onChange={e => setAuthorId(Number(e.target.value) || 0)} value={authorId == null ? authors[0]?.id : authorId}>
          {
            authors.map(({ id, firstName, lastName }) => (
              <option key={id} value={id}>
                {lastName} {firstName}
              </option>
            ))
          }
        </select>
      </div>
      <button type="submit" disabled={!title || authorId == null} onClick={() => createBook(title, authorId)}>Submit</button>
    </div>
  );
}
