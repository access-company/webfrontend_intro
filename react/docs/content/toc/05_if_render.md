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
