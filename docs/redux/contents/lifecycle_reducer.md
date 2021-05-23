# reduxライフサイクル - reducer

*Back: [reduxライフサイクル - action](./contents/lifecycle_action.md)*
-
*Next: [reduxライフサイクル - store](./contents/lifecycle_store.md)*

`reducer`は純関数で、UIの状態遷移を表す。

## 特徴

`reducer`は`action`と「古い`state`」を受け取り、「新しい`state`」を返す。

オブジェクトの場合は更新(mutate)するのではなく、コピー(clone)を返す。

一つのwebアプリには複数のリソースが存在することが多いため、
`reducer`をリソースごとに複数用意することが多い。

`store`を生成する際に`combineReducer`を使うことで、リソースごとの`reducer`からリソースごとの`state`が生成する。

以下の例では、<br />
`store state`の型は`{ counter: number }`<br />
初期値は`{ counter: 0 }`<br />
と考えることができる。

```ts
const counterReducer = (state: number = 0, action: Action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state++
    case 'DECREMENT':
      return state--
    default:
      return state
  }
}

const rootReduer = combineReducer({ counter: counterReducer })
const store = createStore(rootReducer)
```
