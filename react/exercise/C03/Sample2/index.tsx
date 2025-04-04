import { createRoot } from 'react-dom/client';

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
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar" src={props.author.avatarUrl} alt={props.author.name} />
        <div className="UserInfo-name">{props.author.name}</div>
      </div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Teddy',
    avatarUrl: 'https://placebear.com/64/64',
  },
};

createRoot(document.getElementById('root')!).render(
  <Comment date={comment.date} text={comment.text} author={comment.author} />
);
