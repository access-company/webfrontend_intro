// C12/Q1
// 以下の実装の要件を満たしてください。
// * DummyのWeb APIを呼び出す `fetchDummyProfile()` を使って、ユーザプロファイルを取得する
// * `useEffect` と `Suspense` を使う
// * DummyのWeb APIのリクエストは、`UserProfile`コンポーネントの初回レンダーの1回のみとする
// * DummyのWeb APIのリクエスト中は、「Loading...」を画面に表示する
// * 読み込み完了後に、ユーザプロファイルを画面に反映する
//
import { useState, useEffect, FC } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

type User = {
  name: string;
  age: number;
  email: string;
  gender: string;
  avatar: string;
};

function fetchDummyProfile(): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "ACCESS",
        age: 37,
        email: "taro.access@access-company.com",
        gender: "male",
        avatar: "https://placebear.com/200/139",
      });
    }, 2000);
  });
}

const UserProfile: FC = () => {
  const user: User = {
    name: "anonymous",
    age: 0,
    gender: "female",
    email: "anonymous@gmail.com",
    avatar:
      "data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
  };

  return (
    <>
      <div className="container">
        <img src={user.avatar} className="avatar" alt="avatar" />
        <div className="profile">
          <p>
            <span>Name: </span>
            <span>{user.name}</span>
          </p>
          <p>
            <span>Age: </span>
            <span>{user.age}</span>
          </p>
          <p>
            <span>Gender: </span>
            <span>{user.gender}</span>
          </p>
          <p>
            <span>Email: </span>
            <span>{user.email}</span>
          </p>
        </div>
      </div>
    </>
  );
};

createRoot(document.getElementById("root")!).render(<UserProfile />);
