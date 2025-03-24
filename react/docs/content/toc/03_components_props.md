---
title: 第3章　コンポーネントとprops
---

従来の Web アプリケーション開発では、マークアップ(HTML/CSS)とロジック(JavaScript)を別々のファイルに書くことで、関心を分離します。

一方 React は、マークアップとロジックの両方を含む疎結合の **コンポーネント** という単位を導入して、関心を分離します。

コンポーネントを導入することで、 UI を独立した再利用できる部分に分割し、
パーツそれぞれを分離して考えることができるようになります。

# コンポーネントとは？

「疎結合の再利用できる部品に分割したもの」をコンポーネントと定義します。

単純な例として、下記のような単純な関数は、コンポーネントです。

```tsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

つまり、React のコンポーネントはただの JavaScript の関数です。
関数仕様は、引数 `props` で任意の値を受け取り、画面上に表示したい React 要素を返します。

ただの関数なので Arrow Function を使ったり、 TypeScript を用いて型をつけたりすることができます。

```tsx
interface Props {
  name: string;
}

const Welcome = ({ name }: Props): JSX.Element => {
  return <h1>Hello, {name}</h1>;
};
```

`JSX.Element` は、TypeScript において JSX を返す React コンポーネントの戻り値の型を表す型です。

## 関数コンポーネント vs. クラスコンポーネント

React では、上記の様な関数のコンポーネントのことを **関数コンポーネント（function component）** と呼びます。

また、 React では、ES6 クラスでもコンポーネントを定義できます。
ES6 クラスで定義したコンポーネントのことを **クラスコンポーネント（class component）** と呼びます。

```tsx
import {Component} from React

class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}
```

**最新のバージョンの React は、関数コンポーネントを使った実装を推奨しています。**
一部を除き、クラスコンポーネントを使った実装は、極力行わないようにしてください。
後の研修で説明しますが、 React Hooks API は関数コンポーネントでの利用を想定した API であるため、
クラスコンポーネントを選択して実装する必要はありません。

## コンポーネントの命名規則

コンポーネント名は、 **upper camel case**（e.g. UpperCamelCase) で命名してください。
これ以外の形式では動作しません。

### React での開発における命名規則

React 開発においては、 JavaScript/TypeScript の慣習に従ってください。
一般的な命名規則は以下です。

- 変数名や関数名は、 **lower camel case**（e.g. lowerCamelCase）
- 定数名（固定値）は、 **snake case**（e.g. SNAKE_CASE）

開発案件では、コーディングルールがあらかじめ決められているので、そのルールに従ってください。

# props について

コンポーネントが受け取る引数のことを `props` と呼びます。

`props` は読み取り専用であり、コンポーネント自身で変更してはいけません。
全てのコンポーネントは、自身の `props` に対して純粋関数のように振舞わなければなりません。

以下の例は、ルールに反するため、React のビルドでエラーになります。

```tsx
interface Props {
  name: string;
}
function Welcome(props: Props) {
  props.name = 'mutated'; // NG!!
  return <h1>Hello, {props.name}</h1>;
}
```

※ 純粋関数とは、同じ入力に対して常に同じ出力を返し、外部の状態に影響を与えない関数です。

# コンポーネントを組み合わせる

コンポーネントは自身の出力（返り値）の中で他のコンポーネントを参照できます。

```tsx
interface Props {
  name: string;
}
function Welcome(props: Props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Seiji" />
      <Welcome name="Masashi" />
      <Welcome name="ACCESS" />
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
```

```bash
# react/exercise にて
$ TARGET=C03/Sample1 npm run dev
```

典型的な React アプリケーションは、上記の例のように、 `App` コンポーネントをルートとして、様々なコンポーネントを組み合わせて作られます。

# コンポーネントを分割・抽出する

開発を行なっていると、コンポーネントの構造が大きくなることがあります。
そうなった場合、コンポーネントの分割・抽出を考えることになります。

## 分割・抽出前

コンポーネントの分割・抽出について、下記の `Comment` コンポーネントを例に考えてみます。

```tsx
function formatDate(date: Date) {
  return date.toLocaleDateString();
}

interface Props {
  date: Date;
  text: string;
  author: {
    name: string;
    avatarUrl: string;
  };
}

function Comment(props: Props) {
  return (
    <div className="comment">
      <div className="userInfo">
        <img className="avatar" src={props.author.avatarUrl} alt={props.author.name} />
        <div className="userInfo-name">{props.author.name}</div>
      </div>
      <div className="comment-text">{props.text}</div>
      <div className="comment-date">{formatDate(props.date)}</div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placecats.com/64/64',
  },
};

createRoot(document.getElementById('root')!).render(
  <Comment date={comment.date} text={comment.text} author={comment.author} />
);
```

```bash
# react/exercise にて
$ TARGET=C03/Sample2 npm run dev
```

どのようにコンポーネントを抽出・分割するか、またその抽象度をどう設定するかは、アプリの構造に依存します。

抽出・分割したコンポーネントが、再利用できるのであれば、積極的にコンポーネント化を進めてください。

## 分割・抽出後

ここでは、 `userInfo` クラスを `Avatar` コンポーネントと `UserInfo` コンポーネントの 2 つのコンポーネントに分割・抽出しました。

```tsx

function formatDate(date: Date) {
  return date.toLocaleDateString();
}

interface User {
  name: string;
  avatarUrl: string;
}

function Avatar(props: User) {
  return <img className="Avatar" src={props.avatarUrl} alt={props.name} />;
}

function UserInfo(props: User) {
  return (
    <div className="UserInfo">
      <Avatar avatarUrl={props.avatarUrl} name={props.name} />
      <div className="UserInfo-name">{props.name}</div>
    </div>
  );
}

interface Props {
  date: Date;
  text: string;
  author: User;
}

function Comment(props: Props) {
  return (
    <div className="Comment">
      <UserInfo avatarUrl={props.author.avatarUrl} name={props.author.name} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Teddy",
    avatarUrl: "https://placebear.com/64/64",
  },
};

createRoot(document.getElementById("root")!).render(
  <Comment date={comment.date} text={comment.text} author={comment.author} />
);
```

```bash
# react/exercise にて
$ TARGET=C03/Sample3 npm run dev
```

`Comment`コンポーネントがシンプルになりました。

労力を伴う作業ですが、アプリが大きくなったときに努力に見合った利益を生み出します。

# 【ヒント】コンポーネントの分け方

コンポーネントの分け方は、Atomic Design の考え方が参考になるでしょう。

多くの開発案件で、[Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) が採用されています。
また、[Bulletproof React](https://github.com/alan2207/bulletproof-react)で採用されているコンポーネントの分け方も有力です。

# 【課題 3-1】Reply,Retweet,Favorite ボタンを追加してみよう！

前の実装例 C03/Sample3 に、「Reply」「Retweet」「Favorite」の UI を追加してください。

その際、以下の要件を満たしてください。

- 「Reply」「Retweet」「Favorite」のラベル（名前）を受け取る、再利用可能なコンポーネントを一つ追加する
- 「Reply」「Retweet」「Favorite」それぞれを配置する

なお、現段階では以下の要件を満たす必要はありません。

- 「Reply」「Retweet」「Favorite」を選択したときのイベント実装
- デザイン性（要件を満たしていれば OK とします）

下図は、期待する表示のイメージ（解答例）です。

![実装イメージ](./03_lesson3-1.png)

```bash
# react/exercise にて
$ TARGET=C03/Q1 npm run dev
```

編集対象ファイル: `react/exercise/C03/Q1/index.tsx`
