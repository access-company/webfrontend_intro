# React/redux

React から redux への副作用を定義するために、[react-redux](https://react-redux.js.org/tutorials/connect)ライブラリを使用する。

store が変化するたびに、必要に応じて React コンポーネントが再描画される。

## Provider

`Provider`はReact componentの一種で、内側にあるReact componentの状態を監視する。

通常、React component全体を`Provider`で囲む。

`Provider`は`props`として`store`を受け取る。

あとは、`Provider`より内側のcomponentで`useDispatch`/`useSelector`を呼べば、どこからでも`store`にアクセスすることができる。

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

`useSelector`は、`state`からデータを抽出して返す。

`selector`および`equalityFn`を受け取って、`selector`を実行する。

### equalityFn

selectorの結果が変化するかどうかを判定する関数。

selectorの結果が変化しないと判定された場合は、`store.getState`の呼び出しを省略する。

適切な関数を選ぶことで、パフォーマンスの最適化につながる。

#### デフォルト値

プリミティブ型(`boolean`, `number`, `string`), `null`, `undefined`の比較はデフォルトで提供されるため、`equalityFn`を省略できる。

`equalityFn`のデフォルト値は`(a, b) => a === b`である。

#### shallowEqual

shallow object(プリミティブ型をvalueとする連想配列)の比較は`react-redux`の`shallowEqual`で実現できる。

#### deepEqual

deep object(オブジェクトをvalueとする連想配列）の比較には`deepEqual`にあたる関数が必要になるが、`react-redux`では提供していない。

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

`store state`が`{ todos: [{ id: 1, text: 'learn redux' }] }`<br/>
`selector`が`state => state.todos`<br/>
とする。<br/>
```
import { useSelector, shallowEqual } from 'react-redux'
const todos = useSelector(selector, shallowEqual)
```
の結果<br/>
`todos`は`[{ id: 1, text: 'learn redux' }]`<br/>
となる。

`text`が`'learn redux'` => `'learn redux'`と同じ値に更新されても、`view`の更新は起こらない。

## useDispatch

`useDispatch`は、`store.dispatch`にあたる関数`dispatch`を返す。

この`dispatch`が呼ばれると`action`が実行される。

### 例

`const dispatch = useDispatch()`
とすると
`dispatch(action)`
と`action`を実行できる。
