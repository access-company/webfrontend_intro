// C3/Q1
// 前の実装例(C3/Sample3)に、「Reply」「Retweet」「Favorite」のUIを追加してください。
// その際、以下の要件を満たしてください。
// * 「Reply」「Retweet」「Favorite」のラベル（名前）を受け取る、再利用可能なコンポーネントを一つ追加する
// * 「Reply」「Retweet」「Favorite」それぞれを配置する
// なお、現段階では以下の要件を満たす必要はありません。
// * 「Reply」「Retweet」「Favorite」を選択したときのイベント実装
// * デザイン性（要件を満たしていればOKとします）
//
import { createRoot } from "react-dom/client";
import "./style.css";

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
    <div className="comment">
      <UserInfo avatarUrl={props.author.avatarUrl} name={props.author.name} />
      <div className="comment-text">{props.text}</div>
      <div className="comment-date">{formatDate(props.date)}</div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Kitty",
    avatarUrl: "https://placekitten.com/g/64/64",
  },
};

createRoot(document.getElementById("root")!).render(
  <Comment date={comment.date} text={comment.text} author={comment.author} />
);
