import React from 'react';

import { Presenter } from './Presenter';

const routes = ['/authors', '/books']

export function Header() {
  const currentRoute = window.location.pathname

  return (<Presenter
    {
      ...{
        states: {
          routes,
          currentRoute,
        },
      }
    }
  />)
}
