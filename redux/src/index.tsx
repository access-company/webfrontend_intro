import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { store } from './app/store';
import './index.css';
import AuthorsPage from './pages/AuthorsPage';
import BooksPage from './pages/BooksPage';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/authors">
            <AuthorsPage />
          </Route>
          <Route path="/books">
            <BooksPage />
          </Route>
          <Redirect to="/authors" />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
