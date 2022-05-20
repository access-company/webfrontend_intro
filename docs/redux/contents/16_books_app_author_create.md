# 16. booksアプリ - 作家追加

- *Up: [目次](../index.md)*
- *Back: [15. booksアプリ - 本一覧](./15_books_app_book_table.md)*
- *Next: [17. 本追加](./16_advanced_exercise.md)*

## 説明

作家追加機能の流れを確認する。

- 非同期actionを定義する。
  - [src/slices/authors.ts]()
- sliceに関連づける。
  - [src/slices/authors.ts]()
- 作家追加フォームのcontainer componentにイベントハンドラ(createAuthor)を取り込む。
  - [src/components/AuthorsTable/index.ts]()
- Presenterにイベントハンドラ(createAuthor)を渡す。
  - [src/components/AuthorsTable/index.tsx]()
- Presenterはイベントハンドラ(createAuthor)をonClickイベントに紐づける。
  - [src/components/AuthorsTable/Presenter.tsx]()
