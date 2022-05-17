import React from 'react';
import { Author } from '../../models/Author';

import { Book } from '../../models/Book';
import styles from './style.module.css';

interface Props {
  states: {
    authors: Author[]
    books: Book[]
  }
}

export function Presenter(props: Props) {
  const {
    states: {
      authors,
      books,
    },
  } = props
  return (
    <div>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>First name</th>
            <th>Last name</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {books.map(({ id, title, authorId }) => {
            const author = authors.find(({ id }) => id === authorId)
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{title}</td>
                <td>{author?.firstName}</td>
                <td>{author?.lastName}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}
