import { createRoot } from "react-dom/client";

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
    avatarUrl: "https://placebear.com/g/64/64",
  },
};

createRoot(document.getElementById("root")!).render(
  <Comment date={comment.date} text={comment.text} author={comment.author} />
);
