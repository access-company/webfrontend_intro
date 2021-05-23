# reduxライフサイクルの実例

- *Back: [reduxライフサイクル - store](./lifecycle_store.md)*
- *Next: [React/reduxの構成](./react_redux.md)*

reduxがUIにどのようにして影響を与えているかを検証する。

`action`が発行されることによる`state`の変化に注目する。

- http://0.0.0.0:3000/ にアクセスする。
- redux devtoolを開く。
  - devtoolの画面がすぐに消えてしまう場合は、アイコンを右クリック(または2本指タップなど)し、Open in a Panel を選択する。

## 1. store state

  - State => Raw の順で選択する。
    - 以下のようになっていればOK。
      ```js
      {
        todos: [],
        visibilityFilter: 'all'
      }
      ```

## 2. addTodo action

  - TODO追加フォームに任意の文字列を入力し、「追加」ボタンを押す。
  - action一覧にADD_TODOが追加されればOK。

  - ADD_TODO => Action => Raw の順で選択する。
    - 以下のようになっていればOK。
      ```js
      {
        type: 'ADD_TODO',
        payload: {
          id: 1,
          text: 'a'
        }
      }
      ```

  - State => Raw の順で選択する。
    - `todos`にアイテムが追加されていればOK。
      ```js
      {
        todos: [
          {
            id: 1,
            text: 'a',
            completed: false
          }
        ],
        visibilityFilter: 'all'
      }
      ```

## 3. setFilter action

  - TODOの検索条件を「全て」 => 「未完了」or「完了」と切り替える（または逆）。
  - action一覧にSET_FILTERが追加されればOK。

  - SET_FILTER => Action => Raw の順で選択する。
    - 以下のようになっていればOK。
      ```js
        {
          type: 'SET_FILTER',
          payload: {
            filter: 'completed'
          }
        }
      ```

  - State => Raw の順で選択する。
    - `visibilityFilter`が変化していればOK。
      ```js
        {
          todos: [
            {
              text: 'a',
              id: 1,
              completed: false
            }
          ],
          visibilityFilter: 'completed'
        }
      ```
