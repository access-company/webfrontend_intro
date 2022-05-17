import React from 'react';

import styles from './style.module.css';

interface Props {
  states: {
    firstName: string
    lastName: string
  }
  actions: {
    setFirstName: (firstName: string) => void
    setLastName: (lastName: string) => void
    createAuthor: Function
  }
}

export function Presenter(props: Props) {
  const {
    states: {
      firstName,
      lastName,
    },
    actions: {
      setFirstName,
      setLastName,
      createAuthor,
    }
  } = props

  return (
    <div>
      <div>
        <span>First Name</span>
        <input type="text" name="firstName" onChange={e => setFirstName(e.target.value)} value={firstName} />
      </div>
      <div>
        <span>Last Name</span>
        <input type="text" name="lastName" onChange={e => setLastName(e.target.value)} value={lastName} />
      </div>
      <button type="submit" disabled={!firstName || !lastName} onClick={() => createAuthor(firstName, lastName)}>Submit</button>
    </div>
  );
}
