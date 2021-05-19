---
title: "第10章　Hooksのルール"
---

Hooks API は2つのルールに従う必要があります。


# Hooks を呼び出すのはトップレベルのみ

**Hookを `if`文や`for`文、クロージャー（ネストされた関数）内で定義してはいけません。**

```javascript
function Counter(props) {
  let arr;
  if (props.initCount === 0) {
    arr = useState(props.initCount)  // NG
  }

  // 略
}
```
```javascript
function Counter(props) {
  let arr;
  for (const element of props.data) {
    arr = useState(0)   // NG
  }

  // 略
}
```
```javascript
function Counter() {
  let arr;

  function handleClick() {
    arr = useState(0)   // NG
  }

  // 略
}
```

# Hooks を呼び出すのはReactの関数内のみ

**Hookを通常のJavaScript関数から呼び出さないでください。**
[カスタムHook](https://ja.reactjs.org/docs/hooks-custom.html) は、一種のJavaScript関数ですが、最終的にReactの関数（コンポーネント）内
から呼び出されるので問題ありません。
