# 11. 基本演習2 - counterアプリ(非同期処理)

- *Up: [目次](../index.md)*
- *Back: [10. 非同期処理](./10_async.md)*
- *Next: [12. middleware](./12_middleware.md)*

## 概要

非同期なcounterアプリの内部動作を確認する。

## ソース

[counterアプリ(非同期処理)](https://codesandbox.io/s/counter-async-w0nn0q)

## 手順

### 1. 環境設定

- redux devtoolを開く。
  - devtoolの画面がすぐに消えてしまう場合は、アイコンを右クリック(または2本指タップなど)し、Open in a Panel を選択する。

### 2. 初期状態

- actionの一覧から`@@INIT`を選択する。
  - State => Raw の順で選択する。
  ```js
  {
    counter: {
      value: 0,
      status: 'idle'
    }
  }
  ```

### 3. 状態遷移

- `...+` ボタンをクリックする。
  - 1秒後に値が1増加する。
- actionの一覧から`counter/incrementAsync/pending`を選択する。
  - Action => Raw の順で選択する。
    ```js
    {
      type: 'counter/incrementAsync/pending',
      meta: {...}
    }
    ```
  - State => Raw の順で選択する。
  ```js
  {
    counter: {
      status: 'idle',
      value: 1
    }
  }
  ```
- actionの一覧から`counter/incrementAsync/fulfilled`を選択する。
  - Action => Raw の順で選択する。
    ```js
    {
      type: 'counter/incrementAsync/fulfilled',
      meta: {...}
    }
    ```
  - State => Raw の順で選択する。
    ```js
    {
      counter: {
        status: 'idle',
        value: 1
      }
    }
    ```
