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

`useSelector`は`selector`を受け取って、`selector`を実行して、`state`から抽出されたデータを返す。

### 例

`store state`が`{ counter: 0 }`のとき、<br/>
`const count = useSelector(selector)`<br/>
の結果は<br/>
`count === 0`<br/>
となる。

## useDispatch

`useDispatch`は、`store.dispatch`にあたる関数`dispatch`を返す。

この`dispatch`が呼ばれると`action`が実行される。

### 例

`const dispatch = useDispatch()`
とすると
`dispatch(action)`
と`action`を実行できる。
