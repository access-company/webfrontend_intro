import * as React from 'react';
import { Highlight, Snippet } from 'react-instantsearch';
import { Link } from 'gatsby';

export const PageHit = (clickHandler) =>
  function PageHitBase({ hit }) {
    return (
      <div>
        <Link to={hit.slug} onClick={clickHandler}>
          <div>
            <Highlight attribute="title" hit={hit} tagName="mark" />
          </div>
        </Link>
        <Snippet attribute="excerpt" hit={hit} tagName="mark" />
      </div>
    );
  };
