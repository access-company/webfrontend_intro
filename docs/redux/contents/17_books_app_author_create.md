# 17. booksアプリ - 作家追加

- *Up: [目次](../index.md)*
- *Back: [16. 基本演習3(booksアプリ - 本一覧)](./16_exercise_03_books_app_book_table.md)*
- *Next: [18. 基本演習4(booksアプリ - 本追加)](./18_exercise_04_books_app_book_create.md)*

## 概要

作家追加機能の流れを確認する。

- 非同期actionを定義する。
  - [src/slices/authors.ts](https://codesandbox.io/s/books-m7xgxj?file=/src/slices/authors.ts)
- sliceに関連づける。
  - [src/slices/authors.ts](https://codesandbox.io/s/books-m7xgxj?file=/src/slices/authors.ts)
- 作家追加フォームのcontainer componentにイベントハンドラ(createAuthor)を取り込む。
  - [src/components/AuthorCreateForm/index.ts](https://codesandbox.io/s/books-m7xgxj?file=/src/components/AuthorCreateForm/index.ts)
- Presenterにイベントハンドラ(createAuthor)を渡す。
  - [src/components/AuthorCreateForm/index.ts](https://codesandbox.io/s/books-m7xgxj?file=/src/components/AuthorCreateForm/index.ts)
- Presenterはイベントハンドラ(createAuthor)をonClickイベントに紐づける。
  - [src/components/AuthorCreateForm/Presenter.tsx](https://codesandbox.io/s/books-m7xgxj?file=/src/components/AuthorCreateForm/Presenter.tsx)
