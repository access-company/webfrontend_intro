---
title: '第5章　条件付きレンダー'
---

React における条件付きレンダーは、JavaScript における条件分岐と同じように動作します。

```typescript
type GreetingProps = {
  isLoggedIn: boolean;
};

const UserGreeting: FC = () => <h1>Welcome back!</h1>;
const GuestGreeting: FC = () => <h1>Please sign up.</h1>;
const Greeting: FC<GreetingProps> = (props) => {
  return props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
};

createRoot(document.getElementById('root')!).render(
  // Try changing to isLoggedIn={false}:
  <Greeting isLoggedIn={true} />
);
```

```bash
# react/exercise にて
$ TARGET=C05/Sample1 npm run dev
```

もちろん、条件付きレンダーを変数に格納することもできます。

```javascript
const UserGreeting: FC = () => <h1>Welcome back!</h1>
const GuestGreeting: FC = () => <h1>Please sign up.</h1>
const Greeting: FC<GreetingProps> = props => {
+  const greeting = props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />
+  return greeting
-  return props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />
}

createRoot(document.getElementById("root")!).render(
  // Try changing to isLoggedIn={false}:
  <Greeting isLoggedIn={true} />
);
```

下記のように、Greeting コンポーネントの構造が少し変わった場合でも、条件付きレンダーが利用できます。

```javascript
// 条件付きレンダーを変数に入れる
const UserGreeting: FC = () => <h1>Welcome back!</h1>;
const GuestGreeting: FC = () => <h1>Please sign up.</h1>;
const Greeting: FC<GreetingProps> = (props) => {
  const greeting = props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
  return <div className="container">{greeting}</div>;
};

createRoot(document.getElementById("root")!).render(
  // Try changing to isLoggedIn={false}:
  <Greeting isLoggedIn={true} />
);
```

条件付きレンダーを中括弧でインライン記述もできます。

```javascript
const UserGreeting: FC = () => <h1>Welcome back!</h1>;
const GuestGreeting: FC = () => <h1>Please sign up.</h1>;
const Greeting: FC<GreetingProps> = (props) => {
  return <div className="container">{props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />}</div>;
};

createRoot(document.getElementById("root")!).render(
  // Try changing to isLoggedIn={false}:
  <Greeting isLoggedIn={true} />
);
```

# 【課題 5-1】条件分岐をさせよう！

以下の要件を満たしてください。

- 画面上に文字列が表示されている
  - valid な文字列を赤色、そうでない文字列を青色にする
    - アルファベット 4 文字, 数字 3~4 文字と続く文字列を valid とする
    - 関数 isValidValue が valid かどうか判定
      - 引数の文字列が valid なら true, そうでなければ false を返す
  - [ヒント] 文字列の入った四角形は `ListItem` コンポーネント

```bash
# react/exercise にて
$ TARGET=C05/Q1 npm run dev
```

編集対象ファイル: `react/exercise/C05/Q1/index.tsx`
