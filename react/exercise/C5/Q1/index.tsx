// C5/Q1
// 以下の要件を満たしてください
// * 画面上に文字列が表示されている
//   * valid な文字列を赤色、そうでない文字列を青色にする
//      * アルファベット4文字, 数字3~4文字と続く文字列を valid とする
//      * 関数 isValidValue が valid かどうか判定
//      * 引数の文字列が valid なら true, そうでなければ false を返す
// * [ヒント] 文字列の入った四角形は `ListItem` コンポーネント
//
import { FC } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

declare type ListItemProps = {
  value: string;
};

const valueList = [
  "user123",
  "Hoge9999",
  "dummy12",
  "test678",
  "React246",
  "HTML234",
  "DEV3456",
];

// Value が Valid かどうか確認する関数
const isValidValue = (value: string): boolean =>
  /^[a-zA-Z]{4}[0-9]{3,4}$/.test(value);

// Value が Valid であるものは赤色、そうでないものは青色にする
// 以下の ListItem 以外は変更しないこと

const ListItem: FC<ListItemProps> = (props) => {
  const { value } = props;
  return <div className="normal">{value}</div>;
};

const ChildComponent: FC = () => {
  const list = valueList.map((value) => <ListItem value={value} key={value} />);
  return <div className="subContainer">{list}</div>;
};

const App: FC = () => {
  return <ChildComponent />;
};

createRoot(document.getElementById("root")!).render(<App />);
