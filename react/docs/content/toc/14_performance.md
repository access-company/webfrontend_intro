---
title: 第14章　描画パフォーマンスの最適化
---

(Optional)

React は、関数コンポーネントの描画をメモ化するための API(`React.memo`) を用意しています。メモ化したい関数コンポーネントをラップして利用します。

```javascript
const MemoizedMyComponent = React.memo(function MyComponent(props) {
  /* render using props */
}, opt_areEqual);
```

`React.memo`は、`props` に渡される値の同一性が保証されている場合に効果を発揮する API です。`props`に渡される値が変更されていない場合は、最後のレンダーの結果を再利用します。

ここで注意しなければいけない点は、`props`の値の変更のみを `React.memo`はチェックするということです。下記のような実装を行なっていた場合、`React.memo`による効果はありません。

`React.memo`でラップしている関数コンポーネント内で

- `useState` による再レンダーが行われたとき
- `useContext` を使っているとき
- `useSelector`, `useDispatch` を使っているとき（react-redux）

参照: https://react.dev/reference/react/memo

## 【課題 14-1】 描画パフォーマンスを改善しよう！

はじめに、Chrome Dev Tools を開き、Console の項目（コンソールログ）を表示してください。
Start ボタン押下するとカウントを開始します。Stop ボタンを押下すると、カウントを一時停止します。
HTML 出力画面の count= xxxxx の数字とコンソールログの Counter と CounterButton の数字を
確認してください。

**課題内容**

Counter と CounterButton のコンソールログのカウント数を最適化してください。

```bash
# react/exercise にて
$ TARGET=C14/Q1 npm run dev
```

編集対象ファイル: `react/exercise/C14/Q1/index.tsx`
