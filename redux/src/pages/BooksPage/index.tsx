import React from 'react';

import { BooksTable } from '../../components/BooksTable';
import { BookCreateForm } from '../../components/BookCreateForm';
import { Header } from '../../components/Header';
import './style.css';

function BooksPage() {
  return (
    <div className="BooksPage">
      <Header />
      <div className="BooksTable">
        <BooksTable />
      </div>
      <div className="BookCreateForm">
        <BookCreateForm />
      </div>
    </div>
  );
}

export default BooksPage;
