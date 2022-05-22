import React from 'react';

import { AuthorsTable } from '../../components/AuthorsTable';
import { AuthorCreateForm } from '../../components/AuthorCreateForm';
import { Header } from '../../components/Header';
import './style.css';

function AuthorsPage() {
  return (
    <div className="AuthorsPage">
      <Header />
      <div className="AuthorsTable">
        <AuthorsTable />
      </div>
      <div className="AuthorCreateForm">
        <AuthorCreateForm />
      </div>
    </div>
  );
}

export default AuthorsPage;
