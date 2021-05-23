# 5. reduxライフサイクル - action

- *Up: [目次](../index.md)*
- *Back: [4. reduxライフサイクルの構成](./04_lifecycle.md)*
- *Next: [6. reduxライフサイクル - reducer](./06_lifecycle_reducer.md)*

`action`は UI のイベントを表すオブジェクト。
`action`を生成する関数を`action creator`と呼ぶ。

## 使用法

`action`を`store.dispatch`に渡すとイベントが実行される。

## 実装例

```
const incrementAction = () => ({
  type: 'INCREMENT',
})

const decrementAction = () => ({
  type: 'DECREMENT',
})
```

`action`は`type`で区別される。
`action`は`payload`を持つことができる。
