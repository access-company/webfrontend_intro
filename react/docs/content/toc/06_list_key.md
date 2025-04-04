---
title: '第6章　リストとkey'
---

ここでは、React コンポーネントでリストを扱う方法について学びます。

その前に、 JavaScript で配列を変換する方法をおさらいしましょう。

配列の変換には、`Array`（配列）の `map` 関数（[MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)）を使います。たとえば、`numbers`という配列の各要素を 2 倍にするコードは以下の通りです。

```typescript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num: number) => num * 2);

console.log(doubled); // [2, 4, 6, 8, 10]
```

この `map` を使うことで、 React でも配列を **React 要素のリスト** に変換し、リスト表示を実現できます。

次のコードを例に、リストの作成方法を見ていきましょう。
`ListItem` に渡されている `key` 属性については次のセクションで説明します。

```tsx
type ListItemProps = {
  value: number;
};

type NumberListProps = {
  numbers: Array<number>;
};

const ListItem: FC<ListItemProps> = (props) => <li>{props.value}</li>;

const NumberList: FC<NumberListProps> = (props) => {
  const { numbers } = props;
  return (
    <ul>
      {numbers.map((num: number) => (
        <ListItem key={num} value={num} />
      ))}
    </ul>
  );
};
```

```bash
# react/exercise にて
$ TARGET=C06/Sample1 npm run dev
```

### 【課題 6-1】

以下のような出力となるように変更してください

- item 2
- item 4
- item 6
- item 8
- item 10

```bash
# react/exercise にて
$ TARGET=C06/Q1 npm run dev
```

編集対象ファイル: `react/exercise/C06/Q1/index.tsx`

## React のリストのルール

React では、どの要素が変更、追加もしくは削除されたかを認識するために、各要素に `key` 属性を必ず与える必要があります。
また、 `key` 属性の値は、リスト内で一意（ユニーク）である必要があります。
`key` に使える値は `string` か `number` か `bigint` に限られており、それ以外の型（`object` や `array` など）を指定することはできません。

**【注意事項】**  `key` に配列の item の値を使う場合、値に重複があると描画の不具合を起こす可能性があります。
どのような不具合が起こりうるかは、[公式ドキュメント：key によるリストアイテムの順序の保持](https://ja.react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key)で解説されています。

```javascript
[1, 2, 2, 3, 4, 2];
```

データの中にユニークな識別子 `id` がある場合は、その識別子を `key` 属性の値として使ってください。

```javascript
[
  { id: '0001', number: 1 },
  { id: '0002', number: 2 },
  { id: '0003', number: 2 },
  { id: '0004', number: 3 },
  { id: '0005', number: 4 },
  { id: '0006', number: 2 },
];
```
