// C2/Q1
// * 画面に「Hello, FirstName LastName!」を出力する
//   * （注: FirstName LastName は各自の名前）
// * `createRoot(document.body).render` の引数の一部を式（関数）に置き換える
// * 氏名を格納したオブジェクトを関数の引数に渡す
//
import { createRoot } from "react-dom/client";

interface User {
  firstName: string;
  lastName: string;
}

function formatName(user: User) {
  return `${user.firstName} ${user.lastName}`;
}

const user = {
  firstName: "Kensuke",
  lastName: "Takahara",
};

createRoot(document.body).render(<h1>{formatName(user)}</h1>);
