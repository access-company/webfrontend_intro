import React, { useState } from 'react';

import { Presenter } from './Presenter';

interface Props {
  actions: {
    createAuthor: (firstName: string, lastName: string) => void
  }
}

export function AuthorCreateForm(props: Props) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const { actions: { createAuthor } } = props

  return (<Presenter
    {
      ...{
        states: {
          firstName,
          lastName,
        },
        actions: {
          setFirstName,
          setLastName,
          createAuthor,
        }
      }
    }
  />)
}
