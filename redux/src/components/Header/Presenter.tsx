import React from 'react';
import { Link } from 'react-router-dom';

import styles from './style.module.css';

interface Props {
  states: {
    routes: string[]
    currentRoute: string
  }
}

const words = {
  '/authors': 'Authors',
  '/books': 'Books',
} as any

export function Presenter(props: Props) {
  const {
    states: {
      routes,
      currentRoute,
    },
  } = props

  return (
    <div>
      {
        routes.flatMap(route =>
          route === currentRoute
          ? ([<span key={route} className={styles.currentRoute}>{words[route]}</span>, <span key={`${route}-separator`}> | </span>])
          : ([<Link key={route} to={route} className={styles.link}>{words[route]}</Link>, <span key={`${route}-separator`}> | </span>])
        )
        .slice(0, -1)
      }
    </div>
  );
}
