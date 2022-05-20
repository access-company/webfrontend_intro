# 8. counterアプリ - hooks

- *Up: [目次](../index.md)*
- *Back: [7. counterアプリ - store](./07_counter_app_store.md)*
- *Next: [9. counterアプリ - 実習](./09_counter_app_exercise.md)*

reduxをReactコンポーネントに反映するために、[react-redux](https://react-redux.js.org/tutorials/connect)ライブラリを使用する。

store が変化すると React コンポーネントが再描画される。

## Provider

childrenの状態を監視するコンポーネント。

`Provider`の内側で`useSelector`/`useDispatch`を呼ぶことで`store`にアクセスできる。

### 使用例

- [Provider](https://codesandbox.io/s/redux-training-2022-counter-0k1109?file=/src/index.tsx)

## useSelector

`store`からデータを受け取るためのhook。

### 引数

#### selector

`state`を受け取り、`view`が必要とするデータを抽出する関数。

##### 使用例

- [`state`から`value`を抽出する](https://codesandbox.io/s/redux-training-2022-counter-0k1109?file=/src/slice.ts:630-693)
- [componentに`value`を読み込む](https://codesandbox.io/s/redux-training-2022-counter-0k1109?file=/src/App.tsx:178-224)

#### equalityFn

`selector`の結果が変化するかどうかを判定する関数。

適切な関数を選ぶことで、パフォーマンスの最適化につながる(`useCallback`などと同じ考え方)。

[詳細]('./08_01_counter_app_hooks_equalityfn.md')

## useDispatch

`useDispatch`は、`store`を更新するためのhook。

`dispatch`を返す。

`dispatch`が発火する段階で`action`が実行される。

### 使用例

- [componentに`dispatch`を読み込む](https://codesandbox.io/s/redux-training-2022-counter-0k1109?file=/src/App.tsx:224-258)
- [buttonのonClickイベントを紐づける](https://codesandbox.io/s/redux-training-2022-counter-0k1109?file=/src/App.tsx:318-444)
