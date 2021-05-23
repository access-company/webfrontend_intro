# React/redux

*Back: [reduxライフサイクルの実例](./contents/lifecycle_example.md)*
-
*Next: [React/reduxの実例](./contents/react_redux_example.md)*

React から redux への副作用を定義するために、[react-redux](https://react-redux.js.org/tutorials/connect)ライブラリを使用する。

store が変化するたびに、必要に応じて React コンポーネントが再描画される。

## Provider

`Provider`は`react-redux`が提供するReactコンポーネント。

`Provider`は、内側にあるReactコンポーネント(children)の状態を監視する。

通常、全てのReactコンポーネントを`Provider`で囲む。

`Provider`は`props`として`store`を受け取る。

あとは、`Provider`より内側のcomponentで`useSelector`/`useDispatch`を呼べば、どこからでも`store`にアクセスすることができる。

例 (redux/src/index.tsx):

```ts
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import TodoApp from './pages/TodoApp'

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
)
```

## selector

`selector`は`state`を受け取り、`view`が必要とするデータを抽出する純関数。

### 例

`store state`が`{ counter: 0 }`のとき、<br/>
`counter`を取得するための`selector`は<br/>
`const selector = state => state.counter`<br/>
となる。

## useSelector

`useSelector`は、`react-redux`が提供するReact hooksの一つ。

`useSelector`は、`state`からデータを抽出して返す。

`selector`および`equalityFn`を受け取って、`selector`を実行する。

### equalityFn

selectorの結果が変化するかどうかを判定する関数。

selectorの結果が変化したと判定された場合は、`useSelector`を呼び出しているコンポーネントの再描画がスケジューリングされる。

一方、変化しないと判定された場合は、再描画が省略される。

適切な関数を選ぶことで、パフォーマンスの最適化につながる。

#### デフォルト値

プリミティブ型(`boolean`, `number`, `string`), `null`, `undefined`の比較はデフォルトで提供されるため、`equalityFn`を省略できる。

`equalityFn`のデフォルト値は`(a, b) => a === b`である。

#### shallowEqual

shallow object（プリミティブ型をvalueとする配列 or 連想配列）の比較は`react-redux`の`shallowEqual`で実現できる。

#### deepEqual

deep object（オブジェクトをvalueとする配列 or 連想配列）の比較には`deepEqual`にあたる関数が必要になるが、`react-redux`では提供していない。

[lodashのisEqual](https://lodash.com/docs/4.17.15#isEqual)などを用いるか、そもそもselectorの時点でshallow objectしか返さないようにして、`shallowEqual`を用いる。

### 例1

`store state`が`{ counter: 0 }`<br/>
`selector`が`state => state.counter`<br/>
のとき、
```
import { useSelector } from 'react-redux'
const count = useSelector(selector)
```
の結果は<br/>
`count === 0`<br/>
となる。

### 例2

`store state`が`{ todo: { id: 1, text: 'learn redux' } }`<br/>
`selector`が`state => state.todo`<br/>
とする。<br/>
```
import { useSelector, shallowEqual } from 'react-redux'
const todo = useSelector(selector, shallowEqual)
```
の結果<br/>
`todo`は`{ id: 1, text: 'learn redux' }`<br/>
となる。

`text`が`'learn redux'` => `'learn redux'`と同じ値に更新されても、`view`の更新は起こらない。

## useDispatch

`useDispatch`は、`react-redux`が提供するReact hooksの一つ。

`useDispatch`は、`store.dispatch`にあたる関数`dispatch`を返す。

この`dispatch`が呼ばれると`action`が実行される。

### 例

`const dispatch = useDispatch()`
とすると
`dispatch(action)`
と`action`を実行できる。
