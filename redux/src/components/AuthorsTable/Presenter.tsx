import React from 'react';

import { Author } from '../../models/Author';
import styles from './style.module.css';

interface Props {
  states: {
    authors: Author[]
  }
}

export function Presenter(props: Props) {
  const {
    states: {
      authors,
    },
  } = props
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th>Id</th>
          <th>First name</th>
          <th>Last name</th>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {authors.map(({ id, firstName, lastName }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{firstName}</td>
            <td>{lastName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
