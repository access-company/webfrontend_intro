---
title: '第10章　Hooksのルール'
---

Hooks API は 2 つのルールに従う必要があります。

# Hooks を呼び出すのはトップレベルのみ

**Hook を `if`文や`for`文、クロージャー（ネストされた関数）内で定義してはいけません。**

```tsx
interface Props {
  initCount: number;
}
function Counter(props: Props) {
  let arr;
  if (props.initCount === 0) {
    arr = useState(props.initCount); // NG
  }

  // 略
}
```

```tsx
interface Props {
  data: string;
}
function Counter(props: Props) {
  let arr;
  for (const element of props.data) {
    arr = useState(0); // NG
  }

  // 略
}
```

```tsx
function Counter() {
  let arr;

  function handleClick() {
    arr = useState(0); // NG
  }

  // 略
}
```

# Hooks を呼び出すのは React の関数内のみ

**Hook を通常の JavaScript 関数から呼び出さないでください。**
[カスタム Hook](https://ja.react.dev/learn/reusing-logic-with-custom-hooks) は、一種の JavaScript 関数ですが、最終的に React の関数（コンポーネント）内から呼び出されるので問題ありません。
