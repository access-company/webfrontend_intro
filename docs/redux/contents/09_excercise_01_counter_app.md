# 9. 基本演習1 - counterアプリ

- *Up: [目次](../index.md)*
- *Back: [8. counterアプリ - hooks](./08_counter_app_hooks.md)*
- *Next: [10. 非同期処理](./10_async.md)*

## 概要

counterアプリの内部動作を確認する。

## ソース

[counterアプリ](https://codesandbox.io/s/counter-0k1109)

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
      value: 0
    }
  }
  ```

### 3. 状態遷移

- `+` ボタンをクリックする。
  - 値が1増加する。
- actionの一覧から`counter/increment`を選択する。
  - Action => Raw の順で選択する。
    ```js
    {
      type: 'counter/increment'
    }
    ```
  - State => Raw の順で選択する。
    ```js
    {
      counter: {
        value: 1
      }
    }
    ```
