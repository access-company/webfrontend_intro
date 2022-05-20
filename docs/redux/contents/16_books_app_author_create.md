# 16. booksアプリ - 作家追加

- *Up: [目次](../index.md)*
- *Back: [15. booksアプリ - 本一覧](./15_books_app_book_table.md)*
- *Next: [17. booksアプリ - 本追加](./17_books_app_book_create.md)*

## 説明

作家追加機能の流れを確認する。

- 非同期actionを定義する。
  - [src/slices/authors.ts](https://codesandbox.io/s/redux-training-2022-books-app-3tdyzk?file=/src/slices/authors.ts)
- sliceに関連づける。
  - [src/slices/authors.ts](https://codesandbox.io/s/redux-training-2022-books-app-3tdyzk?file=/src/slices/authors.ts)
- 作家追加フォームのcontainer componentにイベントハンドラ(createAuthor)を取り込む。
  - [src/components/AuthorCreateForm/index.ts](https://codesandbox.io/s/redux-training-2022-books-app-3tdyzk?file=/src/components/AuthorCreateForm/index.ts)
- Presenterにイベントハンドラ(createAuthor)を渡す。
  - [src/components/AuthorCreateForm/index.ts](https://codesandbox.io/s/redux-training-2022-books-app-3tdyzk?file=/src/components/AuthorCreateForm/index.ts)
- Presenterはイベントハンドラ(createAuthor)をonClickイベントに紐づける。
  - [src/components/AuthorCreateForm/Presenter.tsx](https://codesandbox.io/s/redux-training-2022-books-app-3tdyzk?file=/src/components/AuthorCreateForm/Presenter.tsx)
