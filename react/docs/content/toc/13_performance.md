---
title: 第13章　描画パフォーマンスの最適化
---

(Optional)

Reactは、関数コンポーネントの描画をメモ化するための API(`React.memo`) を用意しています。メモ化したい関数コンポーネントをラップして利用します。

```javascript
const MemoizedMyComponent = React.memo(function MyComponent(props) {
  /* render using props */
}, opt_areEqual)
```

`React.memo`は、`props` に渡される値の同一性が保証されている場合に効果を発揮するAPIです。`props`に渡される値が変更されていない場合は、最後のレンダーの結果を再利用します。

ここで注意しなければいけない点は、`props`の値の変更のみを `React.memo`はチェックするということです。下記のような実装を行なっていた場合、`React.memo`による効果はありません。

`React.memo`でラップしている関数コンポーネント内で

*  `useState` による再レンダーが行われたとき
*  `useContext` を使っているとき
*  `useSelector`, `useDispatch` を使っているとき（react-redux）



参照: https://ja.reactjs.org/docs/react-api.html#reactmemo