# 9. counterアプリ - 実習

- *Up: [目次](../index.md)*
- *Back: [8. counterアプリ - hooks](./08_counter_app_hooks.md)*
- *Next: [10. 非同期処理](./10_async.md)*

counterアプリの内部動作を確認する。

- redux devtoolを開く。
  - devtoolの画面がすぐに消えてしまう場合は、アイコンを右クリック(または2本指タップなど)し、Open in a Panel を選択する。

## 1. 初期状態

  - actionの一覧から`@@INIT`を選択する。
  - State => Raw の順で選択する。
  ```js
  {
    counter: {
      value: 0
    }
  }
  ```

## 2. 状態遷移

  - `+` ボタンをクリックする。
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
