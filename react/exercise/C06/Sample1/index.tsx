import { FC } from "react";
import { createRoot } from "react-dom/client";

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

// numbers は重複のないリスト
const numbers = [1, 2, 3, 4, 5];
createRoot(document.getElementById("root")!).render(
  <NumberList numbers={numbers} />
);
