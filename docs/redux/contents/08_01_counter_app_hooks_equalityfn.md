# 8.1. counterアプリ - hooks - equalityFn

- *Up: [8. counterアプリ - hooks](./08_counter_app_hooks.md)*

### 説明

`useSelector(selector, equalityFn)`の`equalityFn`について

#### equalityFn

`selector`の結果が変化するかどうかを判定する関数。

`equalityFn`の返り値が変化した場合は、`useSelector`を呼び出しているコンポーネントの再描画がスケジューリングされる。

`equalityFn`の返り値が変化しない場合は、再描画が省略される。

適切な関数を選ぶことで、パフォーマンスの最適化につながる(`useCallback`などと同じ考え方)。

##### デフォルト値

`equalityFn`のデフォルト値は`(a, b) => a === b`である。

プリミティブ型(`boolean`, `number`, `string`), `null`, `undefined`の比較はデフォルトで提供されるため、`equalityFn`を省略できる。

##### shallowEqual

shallow object（プリミティブ型をvalueとする配列 or 連想配列）の比較は`react-redux`の`shallowEqual`で実現できる。

##### deepEqual

deep object（オブジェクトをvalueとする配列 or 連想配列）の比較には`deepEqual`にあたる関数が必要になるが、`react-redux`では提供していない。

[lodashのisEqual](https://lodash.com/docs/4.17.15#isEqual)などを用いるか、そもそもselectorの時点でshallow objectしか返さない設計にして、`shallowEqual`を用いる。
