# 19. 発展演習

- *Up: [目次](../index.md)*
- *Back: [18. booksアプリ - 基本演習(本追加)](./18_exercise_04_books_app_book_create.md)*

## 概要

booksアプリをさらに修正することでreduxに慣れる。

## ソース

[booksアプリ(+基本演習の答え)](https://codesandbox.io/s/books-answer-jwbox9)

## 発展演習1(booksアプリ - 連打)

booksアプリの以下のバグを修正してください。

HTTPリクエストが完了するのに500msかかるので、連打すれば二重登録することが可能になっています。

HTTPリクエストの間だけSubmitボタンが無効になるようにしてください。

Submitの直後に入力をクリアする方法でも修正できますが、reduxのルールで実現してみてください。

## 発展演習2(booksアプリ - 本削除)

booksアプリに本を削除する機能を追加してください。

非同期action(src/apis/books.ts)、リクエストの型(src/models/Book.ts)は定義済みです。

アプリの見た目と動作は任意です。

「削除ボタンのためにカラムを追加する」などが考えられますが、何でも構いません。

## 発展演習3(booksアプリ - 本更新)

booksアプリに本をstar/unstarする機能を追加してください。

非同期action(src/apis/books.ts)、リクエストの型(src/models/Book.ts)は定義済みです。

データ構造に`starred: boolean`というフィールドを追加してください。

```js
[{
  id: number
  title: string
  authorId: number
  starred: boolean
}]
```

アプリの見た目と動作は任意です。

「スターのためにカラムを追加する」or「背景色を変える」などが考えられますが、何でも構いません。

## 発展演習4(booksアプリ - web storage)

セッションごとにリストがリセットされないようにしてください。

### 要件

- ブラウザ(タブ)を閉じても、次回開いたときに同じリストが表示されること。

### 実装方針

[redux-persist](https://github.com/rt2zz/redux-persist#basic-usage)を用いて、reducerをlocalStorageと連動させる。

#### localStorageとsessionStorage

[web storage](https://developer.mozilla.org/ja/docs/Web/API/Web_Storage_API)はブラウザの記憶領域。

webアプリではユーザー側の状態を永続化するために用いられる。

reduxとの違いは、ページを離れても状態が持続することである。

web storageは、ホストごとにkey(string)とvalue(string)で格納される(key-value store)。

web storageは以下の2種類に分けられる。
- localStorage: ブラウザ(タブ)を閉じても有効
- sessionStorage: ブラウザ(タブ)を閉じると無効
