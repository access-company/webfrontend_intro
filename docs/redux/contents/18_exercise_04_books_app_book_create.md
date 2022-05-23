# 18. 基本演習4(booksアプリ - 本追加)

- *Up: [目次](../index.md)*
- *Back: [17. booksアプリ - 作家追加](./17_books_app_author_create.md)*
- *Next: [19. 発展演習](./19_advanced_exercise.md)*

## 概要

BookCreateFormにreduxが導入されていますが、本を作成するイベントが発行できていません。

BookCreateFormに
```
action.createBook(title: string, authorId: number)
```
というpropsを追加し、本を作成できるように修正してください。
