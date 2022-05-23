# 15. booksアプリ - 作家一覧

- *Up: [目次](../index.md)*
- *Back: [14. booksアプリ](./14_books_app.md)*
- *Next: [16. 基本演習3(booksアプリ - 本一覧)](./16_exercise_03_books_app_book_table.md)*

## 概要

作家一覧機能の流れを確認する。

- サーバーから作家の一覧を取得する
  - [src/apis/author.ts](https://codesandbox.io/s/books-m7xgxj?file=/src/apis/author.ts): サーバーへのHTTPリクエストを想定した非同期処理。これ自体はactionではない。
- 非同期actionを定義する。
  - [src/slices/authors.ts](https://codesandbox.io/s/books-m7xgxj?file=/src/slices/authors.ts)
- sliceに関連づける。
  - [src/slices/authors.ts](https://codesandbox.io/s/books-m7xgxj?file=/src/slices/authors.ts)
- 作家一覧テーブルのcontainer componentにデータ(authors)を取り込む。
  - [src/components/AuthorsTable/index.ts](https://codesandbox.io/s/books-m7xgxj?file=/src/components/AuthorsTable/index.ts)
- Presenterにデータ(authors)を渡す。
  - [src/components/AuthorsTable/index.tsx](https://codesandbox.io/s/books-m7xgxj?file=/src/components/AuthorsTable/index.ts)
- Presenterはデータ(authors)をテーブルの行に紐づける。
  - [src/components/AuthorsTable/Presenter.tsx](https://codesandbox.io/s/books-m7xgxj?file=/src/components/AuthorsTable/Presenter.tsx)
