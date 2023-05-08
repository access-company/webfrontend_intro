// C6/Q1
// 以下のような出力となるように変更してください
// * item 2
// * item 4
// * item 6
// * item 8
// * item 10
//
import { FC } from "react";
import { createRoot } from "react-dom/client";

type ListItemProps = {
  value: string;
};

type NumberListProps = {
  numbers: Array<number>;
};

const ListItem: FC<ListItemProps> = (props) => <li>{props.value}</li>;

const NumberList: FC<NumberListProps> = (props) => {
  const { numbers } = props;
  return (
    <ul>
      {numbers.map((num: number) => {
        const value = `item ${num * 2}`;
        return <ListItem key={num.toString()} value={value} />;
      })}
    </ul>
  );
};

const numbers = [1, 2, 3, 4, 5];
createRoot(document.getElementById("root")!).render(
  <NumberList numbers={numbers} />
);
