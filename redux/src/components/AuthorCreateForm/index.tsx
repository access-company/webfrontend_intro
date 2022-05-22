import React, { useState } from 'react';

import { useDispatch } from '../../app/hooks';
import {
  createAuthorAsync,
} from '../../slices/authors';
import { Presenter } from './Presenter';

export function AuthorCreateForm() {
  const dispatch = useDispatch()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const createAuthor = (firstName: string, lastName: string) => { dispatch(createAuthorAsync({ firstName, lastName })) }

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
