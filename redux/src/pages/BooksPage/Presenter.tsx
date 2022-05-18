import React from 'react';

import { BookCreateForm } from '../../components/BookCreateForm';
import { BooksTable } from '../../components/BooksTable';
import { Header } from '../../components/Header';
import { Author } from '../../models/Author';
import { Book } from '../../models/Book';
import './style.css';

interface Props {
  states: {
    authors: Author[]
    books: Book[]
  }
  actions: {
    createBook: (title: string, authorId: number) => void
  }
}

function Presenter(props: Props) {
  const {
    states: { authors, books },
    actions: { createBook },
  } = props
  return (
    <div className="BooksPage">
      <Header />
      <div className="BooksTable">
        <BooksTable states={{ authors, books }} />
      </div>
      <div className="BookCreateForm">
        <BookCreateForm states={{ authors }} actions={{ createBook }} />
      </div>
    </div>
  );
}

export default Presenter;
