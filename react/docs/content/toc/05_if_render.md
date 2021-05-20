---
title: "第5章　条件付きレンダー"
---

Reactにおける条件付きレンダーは、JavaScriptにおける条件分岐と同じように動作します。


```javascript
const UserGreeting: FC = () => <h1>Welcome back!</h1>
const GuestGreeting: FC = () => <h1>Please sign up.</h1>
const Greeting: FC<GreetingProps> = props => {
  return props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />
}

ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Greeting isLoggedIn={true} />,
  document.getElementById('root')
)
```

[CodePen](https://codepen.io/aseijiurushihara/pen/QWjGBgX?editors=0010)


もちろん、条件付きレンダーを変数に格納することもできます。


```javascript
const UserGreeting: FC = () => <h1>Welcome back!</h1>
const GuestGreeting: FC = () => <h1>Please sign up.</h1>
const Greeting: FC<GreetingProps> = props => {
+  const greeting = props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />
+  return greeting
-  return props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />
}

ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Greeting isLoggedIn={true} />,
  document.getElementById('root')
)
```

下記のように、Greetingコンポーネントの構造が少し変わった場合でも、条件付きレンダーが利用できます。

```javascript
// 条件付きレンダーを変数に入れる
const UserGreeting: FC = () => <h1>Welcome back!</h1>
const GuestGreeting: FC = () => <h1>Please sign up.</h1>
const Greeting: FC<GreetingProps> = props => {
  const greeting = props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />
  return (
    <div className="container">
      {greeting}
    </div>
  )
}

ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Greeting isLoggedIn={true} />,
  document.getElementById('root')
)
```

条件付きレンダーを中括弧でインライン記述もできます。

```javascript
const UserGreeting: FC = () => <h1>Welcome back!</h1>
const GuestGreeting: FC = () => <h1>Please sign up.</h1>
const Greeting: FC<GreetingProps> = props => {
  return (
    <div className="container">
      {
        props.isLoggedIn
          ? <UserGreeting />
          : <GuestGreeting />
      }
    </div>
  )
}

ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Greeting isLoggedIn={true} />,
  document.getElementById('root')
)
```

# 【課題5-1】条件分岐をさせよう！

以下の要件を満たしてください。（[Fork](https://codepen.io/ka-clmx/pen/xxqReww)）。

* 画面上に文字列が表示されている
  * valid な文字列を赤色、そうでない文字列を青色にする
    * アルファベット3文字, 数字3~4文字と続く文字列を valid とする
    * 関数 isValidValue が valid かどうか判定
      * 引数の文字列が valid なら true, そうでなければ false を返す
* `ListItem` 以外は変更しないこと
  * [ヒント] 文字列の入った四角形は `ListItem` コンポーネント
