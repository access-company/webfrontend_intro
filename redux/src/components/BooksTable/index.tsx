import React, { useEffect } from 'react';

// hooksとactionをimportしてください。
// import { useSelector, useDispatch } from '../../app/hooks';
// import { fetchAuthorsAsync, selectAuthors } from '../../slices/authors';
// import { fetchBooksAsync, selectBooks } from '../../slices/books';
import { Presenter } from './Presenter';

export function BooksTable() {
  // useSelectorでデータを取得するロジックを指定してください。
  // const authors = ...
  // const books = ...

  // useDispatchでdispatchを参照してください。
  const dispatch = null

  useEffect(() => {
    // 初回読み込み時にデータを取得してください。
    // dispatch(action)を追加してください。
  }, [dispatch])

  return (<Presenter
    {
      ...{
        states: {
          authors: [],
          books: [],
        }
      }
    }
  />)
}
