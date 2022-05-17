import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { store } from './app/store';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
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
          <Route path="/" />
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
