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

## useDispatch

`useDispatch`は、`store.dispatch`にあたる関数`dispatch`を返す。

この`dispatch`が呼ばれると`action`が実行される。

### 例

`const dispatch = useDispatch()`
とすると
`dispatch(action)`
と`action`を実行できる。

## useSelector

`useSelector`は、`store state`の一部を返す。

`useSelector`の引数`selector`は純関数で、`store state`を受け取って、結果を返す。

### 例

`store state`が`{ counter: 0 }`のとき、<br/>
`const count = useSelector(state => state.counter)`<br/>
の結果は<br/>
`count === 0`<br/>
となる。
